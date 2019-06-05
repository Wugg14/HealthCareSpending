function draw(data){
    /*
      D3.js setup code
     */
    "use strict";
    //set some constants
    let svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;

    //set the scale and range(pixel space available)
    //y range is always backwards in d2 because dom renders top to bottom
    let yScale = d3.scaleLinear().range([height, 0]),
        //band scale into catagories
        xScale = d3.scaleBand().range([0,width]).paddingInner(0.4);

    //add group element to place things inside of
    let g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");

    //get the data for 1970
    let restructured = restructure_data(data, 1970);

    //set the domain based on the restructured data (extent of the data values to map to the scale)
    xScale.domain(restructured.map(function(d) { return d.Country; }));
    yScale.domain([0, 18]);


    //add axis to bottom
    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    //add axis to the side
    g.append("g")
        .call(d3.axisLeft(yScale).tickFormat(function(d){
            return d + "%";
        }).ticks(10))
        .append("text")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("value");

    //add the bars, svg rect
    g.selectAll(".bar")
        .data(restructured)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return xScale(d.Country); })
        .attr("y", function(d) { return yScale(d.Spending); })
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) { return height - yScale(d.Spending); })
        .attr("fill", "black");

    //begin_counting_years(data);
}
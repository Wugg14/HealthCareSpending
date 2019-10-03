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
    let xScale = d3.scaleLinear().range([0, width]),
        //band scale into categories
        yScale = d3.scaleBand().range([height, 0]).paddingInner(0.4);

    //add group element to place things inside of
    let g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");

    //get the data for 1970
    let restructured = restructure_data(data, 1972);

    //set the domain based on the restructured data (extent of the data values to map to the scale)
    xScale.domain([0, 20]);
    yScale.domain(restructured.map(function(d) { return d.Country; }));


    //add axis to the bottom
    g.append("g")
        .call(d3.axisBottom(xScale).tickFormat(function(d){
            return d + "%";
        }).ticks(10))
        .attr("transform", "translate(0," + height + ")")
        .append("text")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("value");

    //add axis to side
    g.append("g")
        .attr("class", "axis")
        .attr("id", "yAxis")
        .call(d3.axisLeft(yScale));



    //add the bars, svg rect
    g.selectAll(".bar")
        .data(restructured)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("id", function(d) {return d.Country})
        .attr("x", 0)
        .attr("y", function(d) { return yScale(d.Country); })
        .attr("height", yScale.bandwidth())
        .attr("width", function(d) { return xScale(d.Spending); })
        .attr("fill", "black");

    //Color USA and Average
    let usa = document.getElementById("United States");
    let average = document.getElementById("Average")
    usa.style.fill = "red";
    average.style.fill = "blue";

    begin_counting_years(data, xScale, yScale);
}
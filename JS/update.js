function update(year, data, xScale, yScale){

    //update.js title
    d3.select('h1')
        .text("Health Care Spending as a Percentage of GDP " + year);

    console.log(year);

    let restructured = restructure_data(data, year);


    let g = d3.select("g")

    d3.select("g")
        .selectAll("rect")
        .remove();

    // Remove Y Axis and Rescale with current year data
    d3.select("#yAxis")
        .remove();

    yScale.domain(restructured.map(function(d) { return d.Country; }));

    //add axis to side
    g.append("g")
        .attr("class", "axis")
        .attr("id", "yAxis")
        .call(d3.axisLeft(yScale));

    //Add bars
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
    usa.style.fill = "red";
    let average = document.getElementById("Average");
    average.style.fill = "blue";

    debugger;

}
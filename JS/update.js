function update(year, data, xScale, yScale){

    //update.js title
    d3.select('h1')
        .text("Health Care Spending as a Percentage of GDP " + year);

    console.log(year);

    let restructured = restructure_data(data, year);

    g = d3.select("g")

    d3.select("g")
        .selectAll("rect")
        .remove();
    

    g.selectAll(".bar")
        .data(restructured)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", function(d) { return yScale(d.Country); })
        .attr("height", yScale.bandwidth())
        .attr("width", function(d) { return xScale(d.Spending); })
        .attr("fill", "black");
}
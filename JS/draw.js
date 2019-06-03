function draw(data){
    /*
      D3.js setup code
     */
    "use strict";
    const margin = 75,
        width = 1400 - margin,
        height = 600 - margin;

    let svg = d3.select("body")
        .append("div")
        .style("width", width + margin)
        .style("height", height + margin)
        .attr('class','chart');


    let restructured = restructure_data(data, 1970);


    d3.select(".chart")
        .selectAll("div")
        .data(restructured)
        .enter()
        .append("div")
        .style('width', function(d){
            if(d['Spending'] === "null"){
                return '5px';
            }
            return d['Spending'] * 100 + 'px';
        })
        .style("height", "50px")
        .style("background-color", "lightBlue")
        .style("border", "1px solid black")
        .text(function(d){
            return d["Country"];
        });
    begin_counting_years(data);
}
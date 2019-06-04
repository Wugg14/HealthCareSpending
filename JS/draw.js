function draw(data){
    /*
      D3.js setup code
     */
    "use strict";
    const margin = 75,
        width = 1400 - margin,
        height = 600 - margin;

    let x = d3.scaleLinear()
        .range([0, width]);

    x.domain([0,17.12]);

    let xAxis = d3.axisBottom(x);


    let svg = d3.select("body")
        .append("svg")
        .style("width", width + margin)
        .style("height", height + margin)
        .append('g')
            .attr('class','chart');



    let restructured = restructure_data(data, 1970);


    d3.select("svg")
        .selectAll("div")
        .data(restructured)
        .enter()
        .append("div")
        .style('width', function(d){
            if(d['Spending'] === "null"){
                return '5px';
            }
            return d['Spending'] * 80 + 'px';
        })
        .style("height", "50px")
        .style("background-color", "lightBlue")
        .style("border", "1px solid black")
        .text(function(d){
            return d["Country"];
        });

    begin_counting_years(data);
}
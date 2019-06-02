function update(year, data){

    //update.js title
    d3.select('h1')
        .text("Health Care Spending as a Percentage of GDP " + year);

    console.log(year);

    restructured = restructure_data(data, year);

    console.log(restructured);

    d3.select(".chart")
        .selectAll("div")
        .remove();

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

    console.log('done!');
}
function begin_counting_years(data, x, y){
    let years = [];

    for(let i=1972;i<2019;i++){
        years.push(i);
    }

    let i = 0;
    setInterval(function(){
        update(years[i], data, x, y);
        i +=1;
        if(i === 49){
            clearInterval();
        }
    }, 2000);
}



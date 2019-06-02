function begin_counting_years(data){
    let years = [];

    for(let i=1970;i<2019;i++){
        years.push(i);
    }

    let i = 0;
    setInterval(function(){
        update(years[i], data);
        i +=1;
        if(i === 49){
            clearInterval();
        }
    }, 2000);


}



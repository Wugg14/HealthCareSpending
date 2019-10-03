function begin_counting_years(data, x, y){
    let years = [];

    for(let i=1972;i<2018;i++){
        years.push(i);
    }

    let i = 0;
    let timer=  setInterval(function(){
        update(years[i], data, x, y);
        i +=1;
        console.log(i);
        if(i === 46){
            clearInterval(timer);
            console.log('show slider');
            let sliderContainer = document.getElementById("slider-container");
            sliderContainer.style.display = "block";
        }
    }, 800);

}


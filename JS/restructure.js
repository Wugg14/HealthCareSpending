function restructure_data(data, year){

    const indexedYear = year - 1970;
    const year_data = data[indexedYear];
    let structuredArray = [];
    const countryKeys = Object.keys(year_data);
    const numericalValues = Object.values(year_data);
    const totalNumber = countryKeys.length;
    let spendingValue = "null";
    for(let i = 1; i < totalNumber; i++) {
        if(numericalValues[i] === "null"){
            let spendingValue = 0;
            structuredArray.push({"Country": countryKeys[i], "Spending": spendingValue});
        } else{
            let spendingValue = Number(numericalValues[i]);
            structuredArray.push({"Country": countryKeys[i], "Spending": spendingValue});
        }
    }
    structuredArray = sortByKey(structuredArray);

    return structuredArray;
}
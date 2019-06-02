function restructure_data(data, year){
    indexedYear = year - 1970;

    let year_data = data[indexedYear];

    let structuredArray = [];
    let countryKeys = Object.keys(year_data);
    let numericalValues = Object.values(year_data);
    let totalNumber = countryKeys.length;
    for(let i = 1; i < totalNumber; i++) {
        structuredArray.push({"Country": countryKeys[i], "Spending": numericalValues[i]});
    }

    structuredArray = sortByKey(structuredArray, 'Spending')

    return structuredArray;
}
function restructure_data(data, year){
    const indexedYear = year - 1970;

    const year_data = data[indexedYear];

    let structuredArray = [];
    const countryKeys = Object.keys(year_data);
    const numericalValues = Object.values(year_data);
    const totalNumber = countryKeys.length;
    for(let i = 1; i < totalNumber; i++) {
        structuredArray.push({"Country": countryKeys[i], "Spending": numericalValues[i]});
    }

    structuredArray = sortByKey(structuredArray, 'Spending')

    return structuredArray;
}
/*
  Sorting array of objects based on a key
  Shout out to https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value for saving me some time
 */
function sortByKey(array) {
    console.log(array);
    return array.sort(function(a, b) {
        let keyA = a.Spending,
            keyB = b.Spending;
        if(keyA < keyB) return -1;
        if(keyA > keyB) return 1;
        return 0;
    });
}
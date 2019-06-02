/*
  Sorting array of objects based on a key
  Shout out to https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value for saving me some time
 */
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
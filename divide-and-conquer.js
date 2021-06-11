// get a large set of data and divide it into a small chunks of data
// Example 1 - Binary Search
// Accepts an  array of sorted values. The values must be sorted and a value and returns the index of where the value is found

// bad solution ..good method later
function binarySearch(arr, value) {
  if (arr.indexOf(value) !== -1) {
    return arr.indexOf(value);
  } else {
    return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4], 11));

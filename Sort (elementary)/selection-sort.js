// /* 
// Selection sort
// start with a small val compare to the next value. 
// if the next value is smaller, update the smaller value. until you find the samllest value.
// take the smallest value to the beginning
// */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        // switch indexes to get the new low
        lowest = j;
      }
    }
    // once the lowest value is found, switch the actual values
    if (i !== lowest) {
      // swap if lowest and i are not the same value
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
};
console.log(selectionSort([2, 6, 8, 1, 40, 2]));

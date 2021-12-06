/* 
Bubble sort 
compare two first numbers, make the bigger number come first and the smaller come second. repeat the process until the end
start again until the numbers are sorted 
*/
const bubbleSort = (arr) => {
  let noSwaps; //end iteration if data is already sorted
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
console.log(bubbleSort([2, 5, 7, 1, 2, 0, 3]));

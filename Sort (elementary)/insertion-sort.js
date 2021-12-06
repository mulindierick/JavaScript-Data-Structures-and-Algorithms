/* 
insetion sort
choose element, place it where it belongs in the sorted portion of the array until the whole array is sorted 
*/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr[j + 1], arr[j]);
    }
    console.log(arr[j + 1], currentVal);
    arr[j + 1] = currentVal;
    // 2          1 
    //next currentval will be 4
  }
  return arr;
};
console.log(insertionSort([2, 1, 4, 6, 2, 19, 1, 2, 5, 0]));

// get index function
const getIndex = (arr, start = 0, end = arr.length - 1) => {
  let startVal = arr[start];
  let index = start;
  for (let i = start + 1; i <= end; i++) {
    if (startVal > arr[i]) {
      index++;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  [arr[start], arr[index]] = [arr[index], arr[start]];
  console.log(arr);
  return index;
};
console.log(getIndex([3, 5, 7, 2, 4, 1]));

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let index = getIndex(arr, left, right);
    //sort left side
    quickSort(arr, left, index - 1);
    //sort right side
    quickSort(arr, index + 1, right);
  }
  return arr;
};
console.log(quickSort([3, 5, 7, 2, 4, 1]));

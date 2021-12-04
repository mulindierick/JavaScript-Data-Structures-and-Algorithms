// the data must be sorted
//uses devide an conquer - divide the data into two and check
//whether the item you are looking for is on the left or right.
//keep the data where the item you are looking for is and discard the rest.
//repeat until you find the value
//1,2,3,4,5,6,7,8
//s     m       e
const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    val > arr[middle] ? (start = middle + 1) : (end = middle - 1);

    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? true : false;
};

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);

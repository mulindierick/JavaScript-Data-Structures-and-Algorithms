//create a helper function to merge two sorted arrays

const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // i or j starts from where the above loop stopped from
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};
// console.log(merge([1, 49, 79], [2, 7, 29, 59, 100, 800, 900]));

//merge sort
// divide up the arr into two
// keep the dividing the result until arr length <=1
//merge all the resulting arrays back

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr; //base case
  let midPoint = Math.floor(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0, midPoint));
  let secondHalf = mergeSort(arr.slice(midPoint));
  return merge(firstHalf, secondHalf);
};

console.log(mergeSort([34, 6, 1, 5, 9, 3, 2, 456, 7, 0]));

//Method 2

const merge2 = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift());
  }
  return [...arr, ...left, ...right];
};

const mergeSort2 = (arr) => {
  if (arr.length < 2) return arr;
  const half = arr.length / 2;
  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
};
console.log(mergeSort([34, 6, 1, 5, 9, 3, 2, 456, 7]));

// Use this solution when you need to move from a given direction of a data set in oder to find patterns with in the given data set
// Example 1

// Write a function called sumZero which accepts a sorted array of integers.
// the function should find the first pair where the sum is sum is Zero
// return an array that includes both values that sum toi zero or undefined if the sum does not exist.

function sumZero(arr) {
  let left = 0; // create two pointers, One starts from the beginning of the array and the other from thr end
  let right = arr.length - 1;

  while (left < right) {
    // sp that they do not meet in one pace
    if (arr[left] + arr[right] === 0) {
      // if any of the values add up, return them in an array
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      // increment right every time you have positive difference
      right--;
    } else {
      // increment left for a negative difference
      left++;
    }
  }
}
console.log(sumZero([1, 2, -2, 3]));

// Example 1
// implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array
// there can be negative numbers in the array but it will always be sorted

//using a for loop
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    // make sure j start a head of i by 1
    if (arr[i] !== arr[j]) {
      // if they are not equal, get the unique value to the end of the first unique value
      i++; // move i to the next value
      arr[i] = arr[j]; //replace the unique value found by j with i's position
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// // while loop
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loop or O(N**2) operations with arrays/strings
// It's usually O(N)

// example 1

// Write a function called same, which accepts two arrays. The function should return true if every value in the array
// has a corresponding squared value in the second array. The frequency of values must be the same.

//method one

function same(arr1, arr2) {
  // check if both arrays have the same length or are of the same size
  if (arr1.length !== arr2.length) {
    return false;
  }
  // create two objects for the two arrays to determine their frequency
  let fCounter1 = {};
  let fCounter2 = {};
  // add elements to the first object
  for (const element of arr1) {
    fCounter1[element] = (fCounter1[element] || 0) + 1;
  }
  // add elements to the second object
  for (const element of arr2) {
    fCounter2[element] = (fCounter2[element] || 0) + 1;
  }
  //compare object keys for both objects
  for (const key in fCounter1) {
    if (!(key ** 2 in fCounter2)) {
      return false;
    }
    if (fCounter1[key] !== fCounter2[key ** 2]) {
      return false;
    }
  }
  console.log(fCounter1);
  console.log(fCounter2);
  return true;
}

console.log(same([1, 2, 4], [16, 4, 1]));

// EXAMPLE TWO
// Given two strings, write a function to determine if the second string is an anagram of the first
function ana(a, b) {
  let objA = {};

  if (a.length !== b.length) {
    return false;
  }
  for (const letter of a) {
    objA[letter] = (objA[letter] || 0) + 1;
  }

  for (let i = 0; i < b.length; i++) {
    let letter = b[i];
    if (!objA[letter]) {
      // if value is not there or value is 0
      return false;
    } else {
      objA[letter] -= 1; // count down to 0
    }
  }
  console.log(objA);
  return true;
}

console.log(ana("erickn", "rciekk"));

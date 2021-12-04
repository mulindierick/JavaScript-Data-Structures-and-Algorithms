//call stack
//the function currently invoked is placed at the top of the call stack
//the fuction currently invoked is removed from the top of the call stack once it has been resolved eg returned a value

// with recursive functions, all functions are add to the stack first and then remove later one at a time

// Base Case - the point where the recursion ends
// Different in put - call the same function with different piece of data
// factorial
// create a function => create base case => create new data => call the same function with new data
function factorial(params) {
  if (params === 1) return 1;
  return params * factorial(params - 1);
}
console.log(factorial(100));

//  add numbers from 1 to 100
function sum(params) {
  if (params === 1) return 1;
  return params + sum(params - 1);
}
console.log(sum(100));

// get odd values using helper method
function getOdd(arr) {
  newArr = [];

  function helperMethod(givenArr) {
    if (givenArr.length === 0) return true;
    if (givenArr[0] % 2 === 1) {
      newArr.push(givenArr[0]);
    }
    helperMethod(givenArr.slice(1));
  }
  helperMethod(arr);
  return newArr;
}
console.log(getOdd([1, 2, 3, 4, 5, 6, 7]));

//get odd values using  pure recursion

function pureRecursion(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 === 1) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(pureRecursion(arr.slice(1)));
  return newArr;
}
console.log(pureRecursion([1, 2, 3, 4, 5, 6, 7]));

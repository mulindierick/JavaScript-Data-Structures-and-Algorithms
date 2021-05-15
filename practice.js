// factorial
function factorial(params) {
  if (params === 1) return 1;
  return params * sum(params - 1);
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
        newArr.push(givenArr[0])
    }
    helperMethod(givenArr.slice(1))
    
  }
  helperMethod(arr);
  return newArr;
}
console.log(getOdd([1,2,3,4,5,6,7]))



// pure recursion 

function pureRecursion(arr) {
    let newArr = []
    if (arr.length === 0) return newArr;
    if (arr[0]%2 === 1) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(pureRecursion(arr.slice(1)))
    return newArr
}
console.log(pureRecursion([1,2,3,4,5,6,7]))

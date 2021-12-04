// used to keep track of subset of data in array or string
// find the largest sum for n consecutive values in an array
function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let compareValue = 0;

  if (arr.length < num) return null;
  // get the sum of the first num numbers
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // this helps compareValue to start from where maxSum was
  compareValue = maxSum;
  // i = num because we want to start after the firstSum
  for (let i = num; i < arr.length; i++) {
    //subtract the starting value and add the last value.
    compareValue = compareValue - arr[i - num] + arr[i];
    // find the largest value between compareValue and maxSum
    maxSum = Math.max(maxSum, compareValue);
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 6, 1, 9, 2, 4, 6, 2], 3));

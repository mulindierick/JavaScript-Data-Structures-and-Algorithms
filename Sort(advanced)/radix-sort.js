//unique sort algorithm that uses the property of numbers


// get a number given an index starting from the end eg given(1234, n=0) should give 4
// get largest number in given array of numbers 


//get number given position

function postionNum(num, i){
    return Math.floor (Math.abs(num)/ Math.pow(10, i)) % 10
}

console.log(postionNum(234, 1))

// how many numbers 
function countDigit(num){
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) +1

}

// max digit count - largest number in the given array
function maxDigitCount(arr){
    let largestNum = 0
    
    for (let i = 0; i < arr.length; i++) {
       largestNum = Math.max(largestNum, countDigit(arr[i]))
    }
   return largestNum
}

console.log(maxDigitCount([28, 2, 27374, 2828]))

//write radix sort

function radixSort(arr){
    //get the highest value
    let highestDigit = maxDigitCount(arr)
    for (let i = 0; i < highestDigit; i++) {
        //form the ten backets as arrays
        let buckets = Array.from({length: 10}, () => [])
        // get the number from arry by last digit and push them to buckets
        for (let j = 0; j < arr.length; j++) {
            //get position of the digit
            let position = postionNum(arr[j], i)
            buckets[position].push(arr[j])
            
        }
        // return the sorted items to the original array until they are all sorted
        arr = [].concat(...buckets)
    }
   // return the array
    return arr
}

console.log(radixSort([3839, 3943, 2, 19, 239, 293043, 9585, 9,3849,556,59]))

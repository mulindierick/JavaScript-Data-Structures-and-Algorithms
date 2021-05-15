### Big O Notation 

#### Time complexity

Runtime of an algorithm as the size of the input increases.  
How can we analyze the runtime of an algorithm as the size of the input increases
* O(1)
* O(logn)
* O(n)
* O(nlogn)
* O(n2)


#### Space complexity

Space that an algorithm takes up as the size of the input increases.  
How much additional memory do we need in order to run the code in our algorithm as the size of input increases

#### auxillary space complexity
Space taken up by the algorithm only, excluding the space taken up by the inputs

* Primitives take up constant space eg boolean, null, numbers, undefined 
* Strings require O(n) space ( where n is the length of the String)
* reference types require O(n) space where n is length for arrays or number of keys for objects


### Analyzing Performance of Arrays and Objects 
#### Big O of objects
Use objects when you need unordered items

* Insertion - O(1)
* removal - O(1)
* searching - O(N)
* access - O(1)

#### Big O of object methods 
* Object.keys - O(N)
* Object.values - O(N)
* Object.entries - O(N)
* Object.hasOwnProperty - O(1)

#### Big O of arrays
Use arrays when you need order and fast access 

* Insertion  - depends 
* removal - depends
* searching - O(N)
* access - O(1)

#### Big O of array methods 
* push - O(1)
* pop - O(1)
* shift  - O(N)
* unshift - O(N)
* concat - O(N)
* slice - O(N)
* splice - O(N)
* sort - O(N * log N)
* forEach/map/filter/reduce - O(N)

### Algorithms and problem solving patterns

#### Basic approach
* Devise a plan 
* Master common problem solving patterns 

#### Problem solving strategies 
* Understand the problem 
* Explore concrete examples
* Break it down
* Solve/simplify
* Look back and Refactor 

#### Problem solving patterns 
* Frequency counter 
* Multiple Pointers 
* Sliding Window
* Divide and Conquer
* Dynamic Programming
* Greedy Algorithms
* Backtracking


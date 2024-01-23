const arr1 = [1,2,3,4,5]

// console.log(arr1.length);

arr1.push(6) // To insert a value at the end of the array
// console.log(arr1);

arr1.pop() // To remove a value at the end of the array
// console.log(arr1);

arr1.unshift(0) // To add a value at the start of the array and it will shift the index of whole array
// console.log(arr1);

arr1.shift() // To remove a value at the start of the array and it will shift the index in reverse direction
// console.log(arr1);

//Question to Array

// console.log(arr1.includes(4)) // True if it found the value inside the array else false
// console.log(arr1.indexOf(9)) // It will show the index of that value if the value exists in that  array else it will give -1
// console.log(Array.isArray("AVINASH")) // If it is an array than true else false


// Convert to Array

// console.log(Array.from("AVINASH")) // Convert any other datatype to an array

// Slice and Splice

const arr2 = [1,3,4,5,6,7,8]
const arr3 = arr2.slice(1,3)
// console.log(arr2); 
// console.log(arr3); 

const arr4 = arr2.splice(1,4)
// console.log(arr4);
// console.log("Original Value" ,arr2);

/* Difference between slice and splice -- 
1. Slice do not consider the end index value and it will return 1 value before the end point.
2. Slice never change the original value but splice will remove the data from original value.
3. Splice(starting index, total number of values you want to remove).
*/

const arr5 = [1,2,3,[4,5,6],4,5,[7,8,9,[1,2,3]]]
console.log(arr5.flat(1));

// Depth work on index of the arrays inside the original array
// Infinity or any value higher than the total index of arrays will show a single array


let one = "Avinash"

let two = one

two = "aakash"

console.log(one);
console.log(two);

// In stack always a copy of data is passed. So the original value never change.

let oneObj = {
    fname: "Atul",
    age: 32
}

let twoObj = oneObj

twoObj.fname = "Nitin"

console.log(oneObj.fname);
console.log(twoObj.fname);

// In Heap the original data is passed. If you change the second variable it will change the original data as well.

//String is a primitive data type. It means it will work on Stack.

const fname = "Avinash"

// console.log(fname.length);

// String can be defined by using "", '' and ``.
// Always use backticks if you want to perform something on the string.

const lname = new String("Dubey")

// console.log(lname.length);
// console.log(lname.toUpperCase())

// console.log(lname.__proto__)

// console.log(lname.trim())

// console.log(lname.charAt(3))
// console.log(lname.indexOf('u'))

const userName = new String("avinashdubey")

const dispName = `Hello My Name is ${userName.toUpperCase()}`
console.log(dispName)


const url = 'https://www.google.com/avi%20dubey'
console.log(url.replace('%20','-'))

const myDate = new Date()
// console.log(myDate.toDateString());

// console.log(Date.now()/1000);

// const newDate = new Date(2024,1,19, 16,25,25) // month without inverted comma start with 0 as it takes index value
// console.log(newDate.toLocaleString());

// const newDate = new Date("2024-1-19")
// console.log(newDate.toString());


const newDate = new Date("1-19-2024")
console.log(newDate.toString());


// Here you can not use Date first as its Invalid Format for JS. Use "mm-dd-yyyy" or "yyyy-mm-dd"
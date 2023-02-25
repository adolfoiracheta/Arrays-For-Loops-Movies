//favorite comic movies array

let movieNames = ['The Hulk', 'Spiderman', 'Wolverine', 'Capt America'];
console.log(movieNames[2]);

//variables can be a box that holds any data type
//variables can hold any data

let favoriteFood = ['Tacos', 'Fried Chicken'];

//array of data types
//integers, string, boolean
//print an array within an array

let dataTypes = [42, '42', false, favoriteFood];
console.log(dataTypes);


//FOR Loops: initializer (start), condition (stop iterating), incrament
//print 0-99
//condition is less than 100

for (let i = 0; i<100; i++) {
//console.log(i)
}
//console.log(i);

//FOR Loops: initializer (start), condition (stop iterating), incrament
//print 0-100
//condition is less than/equal 100

for (let i=0; i<=100; i++) {
//console.log(i)
}

//FOR Loops: initializer (start), condition (stop iterating), incrament
//print 1-100
//initializer is equal to 1

for (let i=1; i<=100; i++) {
//console.log(i)
}

let myHouse = ['Family', 'Pets', 'Friends', 'Guests'];

//loop through an array
//print the elements in the house
//condition is static

for (let i=0; i<4; i++) {
//console.log(myHouse[i]);  
}

//condition is dynamic

for (let i=0; i<myHouse.length; i++) {
console.log(myHouse[i]);  
}


//regular for loop
const numbers = [4, 6, 8, 10];
let double = [];
for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    number = number * 2;
    double.push(number)
}
console.log("1", double);


// for of loop
const numbers2 =  [4, 6, 8, 10];
let double2 = [];
for(let number of numbers2){
    number = number * 2;
    double2.push(number);
}
console.log("2", double2);


// for of loop const
const numbers3 =  [4, 6, 8, 10];
let double3 = [];
for(const number of numbers2){
    result = number * 2;
    double3.push(result);
}
console.log("3", double3);


//while loop
const numbers4 = [4, 6, 8, 10];
let double4 = [];
let i = 0;
while( i < numbers4.length){
    let number = numbers4[i];
    i++;
    number = number * 2
    double4.push(number)
}
console.log("4", double4);


//arrow function in loop
const numbers5 = [4, 6, 8, 10];
let double5 = [];
const doubleIt = number => number * 2;
for(const number of numbers5){
    const result = doubleIt(number);
    double5.push(result);
}
console.log("5", double5);


// map er kaj holo loop through kore kicu kora
const doubles = number => number * 2;
const numbers6 = [4, 6, 8, 10];
let double6 = [];
double6 = numbers6.map(doubles);
console.log("6", double6);


//other way of map
const makeDouble = number => number * 2;
const numbers7 = [4, 6, 8, 10];
let double7 = [];
double6 = numbers6.map( number => number * 2);
console.log("7", double6);


//make square
const numbers8 = [4, 6, 8, 10];
const squares = numbers8.map(x => x * x);
console.log("8", squares);
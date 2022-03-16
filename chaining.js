//declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z:600, a: 25, b:68};
const {x, b} = myObject;
// console.log(x, b);

// akhane error na khete chaile (?) use korte hobe tahole true hole vetore jabe ar true a hole vetore jabe na and error o debe na... atake optional chaining o bole
console.log(myObject?.p?.q);


//destructuring array
const [p, q] = [45, 37];
console.log(p, q)


const {sky, color} = { sky: "blue", soil: "mati", color: "red", money:500};
console.log(sky, color);


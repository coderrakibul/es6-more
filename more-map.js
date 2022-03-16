// //use of maps
// map er kaj holo loop kora and function er kaj kore result ta ke array te niye return kora

// const friends = ["tom hanks", "tom cruise", "tom brady", "tom solaiman"];

// const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);


// const products = [
//     {name: 'water bottle', price: 50, color: 'yellow'},
//     {name: 'mobile phone', price: 15000, color: 'black'},
//     {name: 'smart watch', price: 3000, color: 'black'},
//     {name: 'sticky note', price: 30, color: 'pink'},
//     {name: 'swater glass', price: 3, color: 'white'},
// ]

// const productsName = products.map(product => product.name);
// console.log(productsName);
// const productsPrice = products.map(product => product.price);
// console.log(productsPrice);


//use of for each
const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'swater glass', price: 3, color: 'white'},
]

const productsName = products.forEach(product => product.name);
console.log(productsName);
products.forEach(product => console.log(product));
//arrow function er por je condition debo setai akta array te return kore debe
const numbers = [5, 20, 10, 12, 50, 41, 30, 21, 5, 9, 19, 17];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);


// filter akta array te return kore
// filter akta array er vetor joto gulo pabe sob gulo ke debe
const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'swater glass', price: 3, color: 'white'},
]

const expensive = products.filter(product => product.price > 100);
console.log(expensive);

const blacks = products.filter(product => product.color == "black");
console.log(blacks)
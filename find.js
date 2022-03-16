//find akta element ke object a return return kore
// akta array er vetor prothom jeta pabe shudhu setake debe
const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'swater glass', price: 3, color: 'white'},
]

const whiteItem = products.find(product => product.color == "pink");
const blackItem = products.find(product => product.color == "black");
const blueItem = products.find(product => product.color == "blue");
console.log(whiteItem);
console.log(blackItem);
console.log(blueItem)
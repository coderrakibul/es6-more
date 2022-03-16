const fish = {id: 58, name: "king hilsa", price: 9000, phone:"01717000000000", address: "chandpur", dress: "silver"};
//normally
// const phone = fish.phone;
// const price = fish.price;
// const address = fish.address;
// const dress = fish.dress;
// const name = fish.name;

//call multiple variable in one line
const {phone, price, address, dress, name} = fish;

console.log(phone);
console.log(price);
console.log(address);
console.log(dress);
console.log(name);



const company = {
    name: "gp",
    ceo: {id: 1, name:"ajmol",
    food: "fuchka"},
    web: {work: "website development",
    employee:22,
    framework: "react",
    tech: {
        first: "html",
        second: "css",
        third: "bootstrap",
    }}
};
// const work = company.web.work;
// const framework = company.web.framework;
const {work, framework} = company.web;
const {food} = company.ceo;
const {second, third} = company.web.tech;
console.log(work, framework, food, second, third);
console.log(company.web.tech.third);
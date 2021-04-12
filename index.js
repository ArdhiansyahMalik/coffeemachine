const { coffeeStock, isCoffeeMachineReady } = require('./state.js');
// import { coffeeStock, isCoffeeMachineReady } from './state.js';

const displayStock = coffeStock => {
    for (const type in coffeStock) {
        console.log(type);
    }
}

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

console.log(coffeeStock);
console.log(isCoffeeMachineReady);
displayStock(coffeeStock);
makeCoffee("robusta", 80);
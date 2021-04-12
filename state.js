const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};

const isCoffeeMachineReady = true;

// module.exports mengharuskan import pada file lain dengan penamaan yang sama
module.exports = { coffeeStock, isCoffeeMachineReady };

// export default ketika diimport ke file lain tidak harus menggunakan penamaan yang sama
// export { coffeeStock, isCoffeeMachineReady };
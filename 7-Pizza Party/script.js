//Calculate how many slices of pizza your friends will get
let numberOfGuest = parseInt (prompt ("How many friends do you want pizza for?"));
let numberOfPizzas = parseInt (prompt ("How many pizzas do you want?"));
let numberOfSlices = parseInt (prompt ("How many slices should each pizza have?"));

let totalSlices = numberOfPizzas * numberOfSlices;
let slicesPerPerson =Math.floor (totalSlices / numberOfGuest);
let leftrowerSlices = totalSlices % numberOfGuest;

let menu = {
    guest: numberOfGuest,
    pizzas: numberOfPizzas,
    slicesPerPerson: slicesPerPerson,
    leftrowerSlices: leftrowerSlices,
    printSummary: function () {
        console.log (`${this.guest} people with ${this.pizzas} pizzas`);
        console.log  (`Each person gets ${this.slicesPerPerson} ${this.slicesPerPerson === 1 ? 'Pice' : 'pices'} of pizaas`);
        console.log (`There are ${this.leftrowerSlices} leftover ${leftrowerSlices === 1 ? 'pice' : 'pices'}.`);
    }
};
menu.printSummary();
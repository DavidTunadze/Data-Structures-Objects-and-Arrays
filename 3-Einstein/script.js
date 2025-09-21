//Einstein's formula E=mc2 in JavaScript
let userMass = prompt ("Write down how much you weigh."); //M mass
let mass = parseInt (userMass);
const lightSpeed = 300000000; //C The speed of light
let energy = mass * (lightSpeed ** 2);

let formula = [];
formula.push(`E energy = ${energy}`);
formula.push(`M mass = ${userMass}`);
formula.push(`C The speed of light = ${lightSpeed}`);

console.log (formula);
console.log (`E = m * c2\n Where M or your weught\n times C squared or the sped of light square equals\n energy E`)
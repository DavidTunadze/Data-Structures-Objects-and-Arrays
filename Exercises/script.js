/* 1
//Sum of numbers in an array

let numberBasket = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumNumberBasket (numberArray) {
    let total = 0;
    for (let number of numberArray) {
        total += number;
    }
    return total;
}
console.log (sumNumberBasket(numberBasket));
*/

/*2
//Deriving the arithmetic mean of the numbers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
function totalQuantiti (numberArray) {
    let total = 0;
    for (let number of numberArray) {
        total += number;
    }
    let distances = numberArray.length;
    return total / distances;
}
console.log (totalQuantiti(array));
*/

/*3
//Sorting numbers in an array in ascending order

let array = [10, 1, 6, 4, 8, 3, 7, 2, 5];
console.log (array);
array.sort((a, b) => a - b);
console.log (array);
*/

/*4
//Finding the highest number in an array

let array = [9, 2 * 9, 5 + 12, 22];
console.log (Math.max(... array));
*/

/*5
//Finding the smallest number in an array

let array = [33, 22, 44, 55, 88, 77, 66];
console.log (Math.min(...array));
*/

/*6
//Is there a specific number in the array?

let number = 3;
console.log (number);
let array = [1, 2, 3];
console.log (array);
let test = array.includes(number);
console.log (test);
*/

/*7
//Removing a number from an array

let array = [1, 2, 3, 4, 5];
console.log (array);
let test = array.pop();
console.log (test);
console.log (array);
*/

/*8
//To select a specific occurrence in an array

function speadCalculation (array, element) {
    let counter = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            counter++;
        }
    }
    return counter;
}
let array = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4];

console.log (array);

let element = 3;

console.log (speadCalculation(array, element));
*/

/*9
//Sum of even numbers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvenNumber (array) {
    let sum = 0;

    for (let i = 1; i < array.length; i++) {

        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }

    return sum;
}
console.log (sumEvenNumber(array));
*/

/*10
//Finding the second largest number

let array = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let arrsort = array.sort((a, b) => b - a);
let result = arrsort[2];

console.log (result);
*/

/*11
//Comparing arrays

let array_1 = [1, 2, 3, 4, 5];
let array_2 = [1, 2, 3, 4, 5];

function check (array_1, array_2) {
    if (array_1.length !== array_2.length) {
        return false;
    }

    for (let i = 0; i < array_1.length; i++) {

        if (array_1[i] !== array_2[i]) {
            return false;
        }
    }

    return true;
}
console.log (check(array_1, array_2));
*/

/*12
//Merge arrays

let array_1 = [1, 3, 5, 7, 9];
let array_2 = [2, 4, 6, 8, 0];

const counting = (array_1 = [], array_2 = []) => {
    let result = [];

    while (array_1.length && array_2.length) {
        const propabiliti = (array_1[0] < array_2[0]) ? array_1.shift() : array_2.shift();
        result.push(propabiliti);
    }

    if (array_1.length) {
        result = result.concat(array_1);
    } else if (array_2.length) {
        result = result.concat(array_2);
    }

    return result;
}
console.log (counting(array_1, array_2));
*/

/*13
//Sorting a string in an array alphabetically

let arrayMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
arrayMonths.sort();
console.log (arrayMonths);
*/

/*14
//Finding a common element between two arrays

let array_1 = ["C3", "D4", "E5"];
let array_2 = ["A1", "B2", "C3"];

function commonElem (array_1, array_2) {
    const common = [];

    for (let i = 0; i < array_1.length; i++) {
        if (array_2.indexOf(array_1[i]) !== -1) {
            common.push(array_1[i]);
        }
    }

    return common;
}
console.log (commonElem(array_1, array_2));
*/

/*15
//I print the object to the console.

let objeqt = {
    Manufacturer: "mercedes",
    Model: "C63",
    Year: 2015,
}
console.log (objeqt);
*/

/*16
//Adding a method to an object

let objeqt = {
    Manufacturer: "mercedes",
    Model: "C63",
    Year: 2015,
    start: function () {
        return console.log ("The car is starting!");
    }
}
console.log (objeqt.start());
*/

/*17
//Adding a new property to an object

let objectPerson = {
    firstName: "Davit",
    lastName: "Tunadze",
    citi: "Batumi",
}
console.log (objectPerson.firstName);
objectPerson.job = "Information Technologi";
console.log (objectPerson);
*/
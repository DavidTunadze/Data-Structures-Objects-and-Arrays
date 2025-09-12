//
let firstNumber = parseInt(prompt("What is the first number?"));
let secondNumber = parseInt(prompt("What is the second number?"));

function simpleMath (firstNumber, secondNumber) {
    let plus = firstNumber + secondNumber;
    let minus = firstNumber - secondNumber;
    let multiplication = firstNumber * secondNumber;
    let division = firstNumber / secondNumber;

    let array = [];

    array.push(plus);
    array.push(minus);
    array.push(multiplication);
    array.push(division);

    return console.log (array);
}
simpleMath(firstNumber, secondNumber);


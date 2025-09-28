//Simple mathematics Mathematical operations with two numbers
let firstNumber = parseInt(prompt("What is the first number?"));
let secondNumber = parseInt(prompt("What is the second number?"));

function simpleMath (firstNumber, secondNumber) {
    let results = [];

    results.push (`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
    results.push (`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
    results.push (`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
    results.push (`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);

    return results;
}

let output = simpleMath(firstNumber, secondNumber);
output.forEach(line => console.log (line));
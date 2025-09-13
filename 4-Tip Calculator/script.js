//A program that calculates how much you should leave as a tip at a restaurant
let userAmountPaid = prompt ("Enter the amount you need to pay.");

function convertingMoney (userAmountPaid) {
    return parseFloat (userAmountPaid);
}

let teaPercentage = prompt ("Enter the percentage of the amount paid to be kept as a deposit.");

function convertPercentage (teaPercentage) {
    return parseFloat (teaPercentage);
}

let calculation = (convertingMoney(userAmountPaid) / 100) * convertPercentage(teaPercentage);  

let check = [];
check.push (`The amount you paid ${convertingMoney(userAmountPaid)}`);
check.push (`Percentage of the amount paid that you leave to the service staff ${convertPercentage(teaPercentage)}`);
check.push (`Amount to leave as tea ${calculation}`);

console.log (check);
//We ask the user for a rating and based on that, we print the following rating score and the corresponding letter.
let user = prompt("For the evaluation, enter a number from zero-0 to one hundred-100 inclusive.");
let array = ["A", "B", "C", "D", "F"];

function scoreCalculator (user, array) {
    while (user === null || user.trim() === "" || isNaN(user) || user < 0 || user > 100) {
        user = prompt("That's not a valid number! Enter a number from 0 to 100:");
    }
    
    user = parseInt(user);
    let score;

   if (user >= 90) {
        score = `Student's Score: ${user} \n Grade: ${array[0]}`;
    } else if (user >= 80) {
        score = `Student's Score: ${user} \n Grade: ${array[1]}`;
    } else if (user >= 70) {
        score = `Student's Score: ${user} \n Grade: ${array[2]}`;
    } else if (user >= 60) {
        score = `Student's Score: ${user} \n Grade: ${array[3]}`;
    } else {
        score = ` Student's Score: ${user} \n Grade: ${array[4]}`;
    };

    return score;
}
console.log (scoreCalculator(user, array));
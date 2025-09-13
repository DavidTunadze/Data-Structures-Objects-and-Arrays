//We ask the user for a rating and based on that, we print the following rating score and the corresponding letter.
let user = prompt("For the evaluation, enter a number from zero-0 to one hundred-100 inclusive.");
let array = ["A", "B", "C", "D", "F"];

function scoreCalculator (user, array) {
   let score;

   while (user === null || user.trim() === "" || isNaN(user)) {
    user = prompt("That's not a valid number! Enter a number from 0 to 100:");
   }

   user = parseInt(user);

   if (user >= 90 && user <= 100) {
        score = `Student's Score: ${user} \n Grade: ${array[0]}`;
    } else if (user >= 80 && user <= 89) {
        score = `Student's Score: ${user} \n Grade: ${array[1]}`;
    } else if (user >= 70 && user <= 79) {
        score = `Student's Score: ${user} \n Grade: ${array[2]}`;
    } else if (user >= 60 && user <= 69) {
        score = `Student's Score: ${user} \n Grade: ${array[3]}`;
    } else if (user > 0 && user <= 59) {
        score = ` Student's Score: ${user} \n Grade: ${array[4]}`;
    } else {
        user = prompt("That's not a valid number! Enter a number from 0 to 100:");
    }

    return score;
}
console.log (scoreCalculator(user, array));

/*
When you enter 0, the question repeats
After repeating, when you enter 1, it returns undefined
*/
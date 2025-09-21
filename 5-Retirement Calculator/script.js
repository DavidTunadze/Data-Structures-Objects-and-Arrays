//Calculation of retirement age
let userAge = prompt("Enter your age."); 
userAge = parseInt (userAge);

let targetAge = prompt("Enter your age at which you want to retire.");
targetAge = parseInt (targetAge);

let curentyear = new Date().getFullYear();

function calculator (userAge, targetAge, curentyear) {
    let afterTheYear = targetAge - userAge;
    let whatYear = curentyear + afterTheYear;

    let userRetirementAge = {};
    userRetirementAge.age = () => {
        console.log (`User age ${userAge}`);
    }
    userRetirementAge.age (userAge);
    userRetirementAge.retirement = () => {
        console.log (`At what age do you want to retire? ${targetAge}`);
    }
    userRetirementAge.retirement (targetAge);
    userRetirementAge.yearLater = () => {
        console.log (`How many years will it take for you to retire? ${afterTheYear}`);
    }
    userRetirementAge.yearLater (afterTheYear);
    userRetirementAge.whatYearisIt = () => {
        console.log (`What year will it be when you retire? ${whatYear}`);
    }
    userRetirementAge.whatYearisIt (whatYear);

    return userRetirementAge;
}



console.log (calculator(userAge, targetAge, curentyear));
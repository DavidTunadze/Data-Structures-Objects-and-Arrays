//
let userList = prompt ("Enter a list of products you plan to purchase.");

const separation = (list) => list.split(" ");

const sortedList = (arr) => arr.sort();

const upperList = (arr) => arr.map(item => item.toUpperCase());


function countItems (arr) {
    const counts = {};
    
    arr.forEach (item => {
        counts[item] = (counts[item] || 0) + 1;
    });
    
    return counts;
}

const finalList = upperList(sortedList(separation(userList)));
const counted = countItems(finalList);

for (let item in counted) {
    console.log (`${counted[item]} ${item}`);
}

// const shopingList = {};
// separation.forEach((separation, index) => {
//     shopingList[`shoping list ${index + 1}`] = separation;
// });


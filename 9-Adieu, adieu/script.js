//
let name = prompt("Enter your and your friends' names");

let separated = name.split(" ");

if (separated.length > 1) {
    separated.splice(separated.length -1, 0, "end");
    console.log (`Adieu, adieu, to ${separated.join(" ")}`);
} else {
    console.log (`Adieu, adieu, to ${separated[0]}`);
}

//if ()

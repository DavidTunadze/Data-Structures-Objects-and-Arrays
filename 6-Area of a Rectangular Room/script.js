//Area calculator
let lenghtFeet = parseFloat(prompt("Enter the length of the room."));

let widthFeet = parseFloat(prompt("Enter the width of the room."));

function area (wight, height) {
    const conversinFactor = 0.09290304;

    const areaInFeet = lenghtFeet * widthFeet;
    const areaInMeters = areaInFeet * conversinFactor;

    const calculateArea = {};

    calculateArea.lenghtFeet = () => console.log (`Lenght in feet ${lenghtFeet}`);
    calculateArea.widthFeet = () =>  console.log (`width in feet ${widthFeet}`);
    calculateArea.areaFeet = () => console.log (`Area in square feet ${areaInFeet}`);
    calculateArea.lenghtMeters = () => console.log (`Lenght in meters ${(lenghtFeet * 0.3048).toFixed(2)}`);
    calculateArea.widthMeters = () =>  console.log (`width in meters ${(widthFeet * 0.3048).toFixed(2)}`);
    calculateArea.areaMeters = () => console.log (`Area in square meters ${areaInMeters}`);

    return calculateArea;
}

const room = area(lenghtFeet, widthFeet);
room.lenghtFeet();
room.widthFeet();
room.areaFeet();
room.lenghtMeters();
room.widthMeters();
room.areaMeters();
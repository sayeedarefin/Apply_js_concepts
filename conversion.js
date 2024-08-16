function inchToFeet (inches){
    const feet = inches/12;
    return feet;
}

const tableInches = 144;
const tableFeet = inchToFeet(tableInches);
console.log(tableFeet);
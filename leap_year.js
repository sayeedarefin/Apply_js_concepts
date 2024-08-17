function isLeap(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        console.log(year, "is a leap year");
    } else {
        console.log(year, "is not a leap year");
    }
}

const x = 2026;
isLeap(x);


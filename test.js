function getSumOfAnArray(numbers) {
    let sum = 0;  // Initialize sum
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;  // Accumulate the sum
        console.log(index, element, sum);
    }
    return sum;  // Return the sum, not the array
}

function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        // console.log(index, element);
        if (element % 2 !== 0) {  // Check if the element is odd
            oddNumbers.push(element);  // Add odd element to oddNumbers array
        }
    }
    return oddNumbers;  // Return the array of odd numbers
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);  // Call the function to get odd numbers

const oddNumberSum = getSumOfAnArray(oddNumbers);  // Call the function to get the sum of odd numbers

console.log("Odd numbers: ", oddNumbers);  // Output the array of odd numbers

console.log("Odd number sum: ", oddNumberSum);  // Output the sum of odd numbers

// function getSumOfAnArray(numbers){
//     sum=0;
//     for(i=0; i<numbers.length;i++){
//         var index=i;
//         var element = numbers[index];
//         var sum = sum+element;
//         console.log(index,element,sum);
//     }
//     return numbers;
// }

function getOddNumbersOfAnArray(numbers){
    const Oddnumbers=[];
    for(let i=0;i<numbers.length;i++){
        const index = i;
        const element = numbers[index];
        console.log(index,element);
        if(element%2 !==0){
            Oddnumbers.push(element);
        }
    }
    return Oddnumbers;
}
const myNumbers=[1,2,3,4,5,6,7,8,9];
// getSumOfAnArray(myNumbers);
function factorial(number){
    let result=1;
    for(let i=number; i>=1; i--){
        result=result*i;
        console.log(i, result);
    }
    return result;
}
const x=factorial(10);
console.log(x);
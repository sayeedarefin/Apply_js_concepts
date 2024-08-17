function multiplication(numbers){
    result=1 //initialization of result
    for(let i=1;i<numbers; i++){
        result=result*i;
        console.log(i , result);
    }
    return result;
}
var result = multiplication(7); // funtion calling with certain parameters
console.log(result);
function isEven(number)
{
    const remainder = number %2;
    console.log(remainder);

    if(remainder==0){
        console.log("yes");
    }
    else{console.log("no");}
}

isEven(323);
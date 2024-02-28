let euler = 0;

function factorial(number){
    let result = 1;
    if(number === 0 || number === 1){
        return 1
    }else{
    for (let i = 2; i <= number; i++) {
        result *= i;
        }
    return result;
    }
}

for(let n = 0; n < 10; n++){
    let formula = 1/(factorial(n));
    euler += formula;
}

console.log(euler);

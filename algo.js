let euler = 0;

function fatorial(numero){
    let resultado = 1;
    if(numero === 0 || numero === 1){
        return 1
    }else{
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
        }
    return resultado;
    }
}

for(let n = 0; n < 10; n++){
    let paramInicial = 1/(fatorial(n));
    euler += paramInicial
}

console.log(euler);
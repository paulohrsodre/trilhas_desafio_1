let numeros = [23, 16, 11, 8, 19, 14, 5, 21];

function numeroPrimo(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

let primos = numeros.filter(numeroPrimo);

console.log("Os números primos são: " + primos.join(", "));
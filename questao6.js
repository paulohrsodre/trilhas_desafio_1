let numero = 12;

function fatorial(n) {
    let fat = 1;
    for(let i = 2; i <= n; i++)
        fat = fat * i;
    return fat;
}

let resultado = fatorial(numero);

console.log("O fatorial de " + numero + " é: " + resultado);
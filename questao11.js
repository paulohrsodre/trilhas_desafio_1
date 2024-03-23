const prompt = require ("prompt-sync")();

function calcularIdade(dataNascimento) {
    let hoje = new Date();
    let nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

let dataNascimento = prompt("Digite sua data de nascimento no formato yyyy-MM-dd: ");

let idade = calcularIdade(dataNascimento);

console.log("Sua idade é: " + idade);
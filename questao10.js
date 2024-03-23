let texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

function ehMaiuscula(letra) {
    return letra === letra.toUpperCase() && letra !== letra.toLowerCase();
}

let numeroDeMaiusculas = [...texto].filter(ehMaiuscula).length;

console.log(`O número de letras maiúsculas no texto é: ${numeroDeMaiusculas}`);
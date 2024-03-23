const pontosDeVida = 100;
const danoPorAtaque = 20;

const ataques = 3;
const pontosDeVidaRestantes = pontosDeVida - (danoPorAtaque * ataques);

console.log(`O personagem tem ${pontosDeVidaRestantes} pontos de vida restantes após ${ataques}`)
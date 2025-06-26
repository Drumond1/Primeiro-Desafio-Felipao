// Desafio: Classificador de Nível de Herói

// Lista de heróis com nome e XP (para testar usando laço de repetição)
const herois = [
    { nome: 'Arthas', xp: 500 },
    { nome: 'Jaina', xp: 1500 },
    { nome: 'Thrall', xp: 3000 },
    { nome: 'Illidan', xp: 6000 },
    { nome: 'Sylvanas', xp: 7500 },
    { nome: 'Kael', xp: 8500 },
    { nome: 'Anduin', xp: 9500 },
    { nome: 'Malfurion', xp: 12000 }
];

// Função para classificar o nível do herói
function classificarNivel(xp) {
    if (xp < 1000) {
        return 'Ferro';
    } else if (xp <= 2000) {
        return 'Bronze';
    } else if (xp <= 5000) {
        return 'Prata';
    } else if (xp <= 7000) {
        return 'Ouro';
    } else if (xp <= 8000) {
        return 'Platina';
    } else if (xp <= 9000) {
        return 'Ascendente';
    } else if (xp <= 10000) {
        return 'Imortal';
    } else {
        return 'Radiante';
    }
}

// Laço para mostrar os resultados
for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i];
    const nivel = classificarNivel(heroi.xp);
    console.log(`O Herói de nome **${heroi.nome}** está no nível de **${nivel}**`);
}
// Exemplo de uso da função classificarNivel
// console.log(classificarNivel(1500)); // Saída: Bronze
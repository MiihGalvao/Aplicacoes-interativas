/*Problema de Exemplo
4. Leia valores numéricos do usuário enquanto 
este digitar elementos positivos ou zero. 
Quando um número negativo for digitado, 
exiba todos os números pares inserido*/

import * as rs from 'readline-sync';

let numeros: number [] = [];

let numeroEscolhido: number;

do {
    numeroEscolhido = Number(rs.question("Escolha um numero no array: "));
    numeros.push(numeroEscolhido);
}
while (numeroEscolhido > 0);

for (let NumeroExibido of numeros) {
    if (NumeroExibido % 2 == 0) {
        console.log(`${NumeroExibido}`);
    }
}
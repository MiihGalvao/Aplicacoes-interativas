/*Problema de Exemplo
2. Faça um programa capaz de somar dois 
números digitados pelo usuário
• Importante: O programa deverá solicitar 
continuamente a entrada de números até que 
um número válido seja digitado para cada um 
dos valores*/

import * as rs from 'readline-sync';

let n1:number;
let n2:number;

do{
    n1 = Number(rs.question("Digite un numero válido: "));
} while(n1 * 0 !==0);

do{
    n2 = Number(rs.question("Digite um segundo numero valido: "))
} while ( n2 * 0 !== 0);

console.log("a Soma é: " +(n1+n2));
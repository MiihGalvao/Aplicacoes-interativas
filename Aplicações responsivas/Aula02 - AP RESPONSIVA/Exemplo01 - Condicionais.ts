/*Problema de Exemplo
1. Escreva um programa em TypeScript que leia 
o valor de dois números inteiros e a operação 
aritmética desejada (adição, subtração, 
multiplicação e divisão) e calcule a resposta 
adequada*/

import * as rs from 'readline-sync';

const n1 = Number (rs.question("Digite o primeiro numero: "));
const n2 = Number (rs.question("Digite o segundo numero: "));
const operação = rs.question("Insira qual operação deseja usar:  +, -, *, / ");
var result = 0;

switch(operação){


    case ("+")
    result = n1 + n2;
    console.log("O Resultado é " + result);
    break;

    case ("-")
    result = n1 - n2;
    console.log("O Resultado é " + result);
    break;

    case ("*")
    result = n1 * n2;
    console.log("O Resultado é " + result);
    break;

    case ("/")
    result = n1 / n2;
    console.log("O Resultado é " + result);
    break;




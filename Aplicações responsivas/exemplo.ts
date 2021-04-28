import * as rs from 'readline-sync' 

//DECLARAR VARIAVEIS
//string
let message: string = 'Olá-Mundo';

//number
let numero: number;

//boolean
const flag: boolean = true; 

//let
let qualquercoisa:any;

numero = 5;

//IMPRIMIR NO CONSOLE
console.log(message) //alert

//Entrada de Dados

const nome: string = rs.question('Nome: ');

console.log ('Olá,' + nome);

//Template string ou interpolação
console.log ('Olá, ${nome}')
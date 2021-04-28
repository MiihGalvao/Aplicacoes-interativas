import * as rs from 'readline-sync';

const idade = Number (rs.question("Quantos anos você tem ?"));

if(idade >=18){
    console.log("Você é maior de idade");
}
else if ( idade < 60 ) {]
    console.log ("Você não é maior de idade");

}
else {
    console.log("Você é idoso");
}
/**
 * ============================================
 */

const dia = Number(rs.question("Digite um numero (0-6):" ));

switch (dia){

    case 0:
        console.log("Domingo");
        break;

        
    case 1:
        console.log("Segunda");
        break;

        
    case 2:
        console.log("Terça");
        break;

        
    case 3:
        console.log("Quarta");
        break;

        
    case 4:
        console.log("Quinta");
        break;


              
    case 5:
        console.log("Sexta");
        break;

        
    case 6:
        console.log("Sabado");
        break;

        
    default:
        console.log("Dia invalido");
}
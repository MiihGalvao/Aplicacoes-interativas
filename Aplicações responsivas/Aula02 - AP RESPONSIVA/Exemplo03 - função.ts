/*Problema de Exemplo
3. Crie uma função para calcular se um número 
é positivo, negativo ou zero e permita chamala com um número digitado pelo usuário
*/

import * as rs from 'readline-sync';

const num = Number(rs.question("Digite um numero para saber se é positivo ou negativo: "));

console.log (tipoNumero(num));

function tipoNumero(num:Number): string {
if( num > 0){
    return 'Numero digitado é positivo';
} else if (num < 0) {
    return 'Numero negativo';
} else {
    return 'Seu numero é zero.';

}

}





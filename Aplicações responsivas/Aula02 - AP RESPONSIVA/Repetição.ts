import * as rs from 'readline-Sync'

//WHILE

let num = 3;

while ( num <= 10) {
    num ++;
    console.log(num);
}

//DO WHILE

let nome:string;

do {
    nome = rs.question("Digite o seu nome : ");
}
while (nome === "");

//FOR

let repeticao = Number(rs.question("2 Elevado a: "));
let result = 1;

for (let i = 1; i < repeticao; i++) {
    result = result * 2;
}

console.log(`Resultado: ${result} ......... ${repeticao}`);
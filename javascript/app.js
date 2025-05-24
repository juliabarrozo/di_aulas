/*let idade = 18;

 if (idade >= 18) {
    console.log("Você é maior de idade!")
} else {
    console.log("Você é menor de idade!")
} 

let nota = 10;
if (nota >= 9) {
    console.log("Excelente!")
} else if (nota >= 6) { // sem else if retorna "Excelente" e "Aprovado"
    console.log("Aprovado!")
} else {
    console.log("Reprovado :(")
} 

let dia = "Sexta";
switch (dia) {
    case "Segunda":
        console.log("Começo da semana");
        break;
    case "Sexta":
        console.log("Sextou!");
        break;
    default:
        console.log("Outro dia qualquer!")
} 


let contador = 0
while (contador < 3) {
    contador++;
    console.log(contador);
} 

let i = 0;
do {
    console.log("Roda pelo menos uma vez");
} while (i > 1) // mesmo com o while sendo FALSE (i (0) não é maior que 1) ele executa o código ao menos de uma vez
    

for (i=0; i<10; i++) {
    if (i == 2) {
        continue // pula o 2
    }
    console.log(i)
} 

for (i=0; i<10; i++) {
    if (i == 2) {
        break // quebra o código
    }
    console.log(i)
} 

let numero = 5;
if (numero % 2 == 0) {
    console.log("Par")
} else {
    console.log("Impar")
}
*/
let numero = 2;
let i;
console.log("Tabuada de 2")
for (i=0; i<=10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
} 

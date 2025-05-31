/* const nome = "Rillary"  const: permanente, imutavel

let nome2 = "Julia"  let: mutavel 


alert("Bem-vindo ao site!")  imprime na janela do html

const nome = prompt("Digite o seu nome: ") prompt: pede que o usuário digite um valor
console.log("O nome digitado foi: ", nome)  console.log: 

const idade = parseInt(prompt("Digite sua idade: "));
console.log("Idade + 10 =", idade + 10); 

const nome = prompt("Digite o nome do aluno: ");
const nota1 = parseFloat(prompt("Digite a nota do 1 bimestre: "));
const nota2 = parseFloat(prompt("Digite a nota do 2 bimestre: "));
const nota3 = parseFloat(prompt("Digite a nota do 3 bimestre: "));
const nota4 = parseFloat(prompt("Digite a nota do 4 bimestre: "));

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Aluno: ${nome}`)
console.log(`Média final: ${media}`)

if (media >= 6) {
    console.log("Aprovado!")
} else {
    console.log ("Reprovado")
} 
    
const numeros = new Array (1,2,3);

const frutas = ["maça", "banana"];
frutas.push("abacate"); // push: adiciona item a lista
frutas.pop(); // pop: remove o ultimo item 
frutas.shift(); // remove o primeiro elemento
frutas.unshift("Morango"); // adiciona item ao começo da lista

console.log(frutas);


console.log(frutas.includes("Morango")); // verifica se está na lista: True
console.log(frutas.includes("Melão")); // verifica se está na lista: False

frutas.splice(0,1) //
console.log(frutas)


const subFrutas = frutas.slice(0,2) // ele não inclui o ultimo elemento do parametro, vai de 0 a 1
*/ 

const frutas = ["maça", "banana"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
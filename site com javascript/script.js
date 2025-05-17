/* alert("Bem-vindo ao Javascript");
let nome = prompt("Escreva seu nome: ");
document.write("Escrito direto na página")
let titulo =  document.getElementById("#welcome h2");
titulo.innerHTML = "Bem-vindo(a), " + nome; */

window.onload = function () {
    alert("Bem-vindo ao Javascript");
    
    let nome = prompt("Escreva seu nome: ");
    
    let titulo = document.querySelector("#welcome h2");
    if (titulo) {
        titulo.textContent = "Bem-vindo(a), " + nome;
    } else {
        console.error("Elemento #welcome h2 não encontrado.");
    }
};

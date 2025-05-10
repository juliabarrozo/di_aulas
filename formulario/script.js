 // Função para salvar dados no localStorage quando o formulário muda
 function salvarDados() {
    
    const nome = document.getElementById("nome").value; // acessa o valor pelo id
    const email = document.getElementById("email").value;

    
    localStorage.setItem("form_nome", nome); // salvar valor com uma chave
    localStorage.setItem("form_email", email);
  }

  // Função para carregar dados ao iniciar
  function carregarDados() {
    // pega o item
    const nomeSalvo = localStorage.getItem("form_nome");
    const emailSalvo = localStorage.getItem("form_email");

    
    if (nomeSalvo) document.getElementById("nome").value = nomeSalvo; // verifia se nomeSalvo não é nulo ou invalido
    if (emailSalvo) document.getElementById("email").value = emailSalvo;
  }

  // Carregar dados assim que a página estiver pronta
  window.onload = carregarDados; // quando carregar chama a função

  console.log(nome)
  console.log(email)
  console.log(senha)
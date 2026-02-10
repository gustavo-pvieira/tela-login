
const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");
const senha = document.getElementById("senha");
const toggleSenha = document.getElementById("toggleSenha");
const email = document.getElementById("email");

toggleSenha.addEventListener("click", () => {
  if (senha.type === "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (email.value === "gustavo.pvieira@gmail.com" || senha.value === "123456789") {
    mensagem.textContent = "Preencha todos os campos.";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "https://gustavo-pvieira-portfolio.netlify.app/";
    }, 1000);
  }
});
function formatarCPF(campo) {
  let cpf = campo.value.replace(/\D/g, "");

  // Adiciona a formatação
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  campo.value = cpf;
}

let campoCPF = document.getElementById("cpf");

campoCPF.addEventListener("input", function () {
  formatarCPF(campoCPF);
});

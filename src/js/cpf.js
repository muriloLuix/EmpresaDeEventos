function formatarCPF(campo) {
  let cpf = campo.value.replace(/\D/g, "");

  // Adiciona a formatação
  // "$1.$2" são as células, ou seja, após {3} campos, coloque um .
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  campo.value = cpf;
}

let campoCPF = document.getElementById("cpf");

campoCPF.addEventListener("input", function () {
  formatarCPF(campoCPF);
});

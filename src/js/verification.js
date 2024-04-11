// Aqui, busquei por todos os elementos que possuam input
const inputFields = document.querySelectorAll("input");

// field é um ouvinte, que a cada modificação adicionada no campo input, a borda vermelha é removida
inputFields.forEach((field) => {
  field.addEventListener("change", function () {
    this.classList.remove("input-invalid");
  });
});

document.getElementById("btnForm").addEventListener("click", function () {
  const firstName = document.getElementById("firstName");
  const secondName = document.getElementById("secondName");
  const email = document.getElementById("email");
  const tel = document.getElementById("telefone");
  const cpf = document.getElementById("cpf");
  const servicos = document.getElementById("servicos");

  const requiredFields = [firstName, secondName, email, tel, cpf, servicos];

  requiredFields.forEach((field) => {
    if (field.value.trim() === "") {
      // Está verificando se o valor do input está vazio
      field.classList.add("input-invalid");
    } else {
      field.classList.remove("input-invalid");
    }
  });

  if (
    firstName.value.trim() === "" ||
    secondName.value.trim() === "" ||
    email.value.trim() === "" ||
    tel.value.trim() === "" ||
    cpf.value.trim() === "" ||
    servicos.value.trim()
  ) {
    alert(`Por favor, preencha todos os campos obrigatórios!`);
    return;
  }

  $("#exampleModal").modal("show");
});

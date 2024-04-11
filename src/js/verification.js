document.addEventListener("DOMContentLoaded", function () {
  // Para executar apenas quando a página toda for carregada
  const inputFields = document.querySelectorAll("input");

  inputFields.forEach((field) => {
    // Criado um parametro que será recebido
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
      // Está verificando se os inputs possuem algum valor em seu value
      if (field.value.trim() === "") {
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
      servicos.value.trim() === ""
    ) {
      alert(`Por favor, preencha todos os campos obrigatórios!`);
      return;
    }

    $("#exampleModal").modal("show");

    inputFields.forEach((field) => {
      field.value = "";
    });
  });
});

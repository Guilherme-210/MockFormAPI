const inputName = document.getElementById("name")
const inputCellphone = document.getElementById("cellphone")
const inputEmail = document.getElementById("email")
const inputAddress = document.getElementById("address")
const inputCPF = document.getElementById("CPF")
const inputSenha = document.getElementById("senha")
const inputConfirmSenha = document.getElementById("confirmSenha")
let user = {}

document
  .getElementById("btnSubmit")
  .addEventListener("click", async function () {
    const Password = inputSenha
    const confirmSenha = inputConfirmSenha

    try {
      if (Password.value.trim() !== confirmSenha.value.trim()) {
        Promise.reject("As senhas nao conferem")
        confirmSenha.classList.add("error")
        return
      } else {
        confirmSenha.classList.remove("error")
      }

      user = {
        Name: inputName.value.trim(),
        Cellphone: inputCellphone.value.trim(),
        Email: inputEmail.value.trim(),
        Address: inputAddress.value.trim(),
        CPF: inputCPF.value.trim(),
        Password: Password.value,
      }

      const response = await fetch(
        "https://67e05cc17635238f9aad538a.mockapi.io/api/v1/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      )

      if (!response.ok) {
        alert(
          `⚠️ Erro de cominicação com o banco de dados, cadastro cancelado!\nTente novamente mais tarde`
        )
        return Promise.reject(
          "⚠️ Erro de cominicação com o banco de dados, cadastro cancelado!"
        )
      }

      inputName.value = ""
      inputCellphone.value = ""
      inputEmail.value = ""
      inputAddress.value = ""
      inputCPF.value = ""
      inputSenha.value = ""
      inputConfirmSenha.value = ""

      console.log(user)
      users.push(user)
      return Promise.resolve(
        console.log("Usuario cadastrado com sucesso: " + user.Name)
      )
    } catch (error) {
      return console.log("⚠️ Ocorreu um erro:", error.message)
    }
  })

async function pesquiseCPF() {
  const cpf = inputCPF.value.trim();

  try {
    const response = await fetch(
      "https://67e05cc17635238f9aad538a.mockapi.io/api/v1/users"
    )
    if (!response.ok) {
      return Promise.reject("Erro ao buscar usuários!")
    }

    const users = await response.json();
    const user = users.find(user => user.CPF === cpf);

    if (!user) {
      alert("CPF não encontrado!");
      return;
    }

    inputName.value = user.Name;
    inputCellphone.value = user.Cellphone;
    inputEmail.value = user.Email;
    inputAddress.value = user.Address;
    inputCPF.value = user.CPF;
    inputSenha.value = user.Senha;
    inputConfirmSenha.value = "";

    document.getElementById("toggleSenha").style.display = "none";
    
  } catch (error) {
    console.error("Erro:", error.message);
    alert("⚠️ Erro ao buscar CPF!");
  }
}


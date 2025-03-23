const inputName = document.getElementById("name")
const inputCellphone = document.getElementById("cellphone")
const inputEmail = document.getElementById("email")
const inputAddress = document.getElementById("address")
const inputCPF = document.getElementById("CPF")
const inputSenha = document.getElementById("senha")
const inputConfirmSenha = document.getElementById("confirmSenha")

const users = [
  { Nome: "João", CPF: "123.456.789-00" },
  { Nome: "Maria", CPF: "987.654.321-00" },
  { Nome: "Carlos", CPF: "555.666.777-88" },
]
let user = {}

document
  .getElementById("btnSubmit")
  .addEventListener("click", async function () {
    const senha = document.getElementById("senha")
    const confirmSenha = document.getElementById("confirmSenha")

    try {
      if (senha.value.trim() !== confirmSenha.value.trim()) {
        Promise.reject("As senhas nao conferem")
        confirmSenha.classList.add("error")
        return
      }
      confirmSenha.classList.remove("error")

      user = {
        Name: inputName.value.trim(),
        Cellphone: inputCellphone.value.trim(),
        Email: inputEmail.value.trim(),
        Address: inputAddress.value.trim(),
        CPF: inputCPF.value.trim(),
        Senha: senha.value,
      }

      console.log("Usuario cadastrado com sucesso: " + user.Name)

      users.push(user)

      inputName.value = ""
      inputCellphone.value = ""
      inputEmail.value = ""
      inputAddress.value = ""
      inputCPF.value = ""
      inputSenha.value = ""
      inputConfirmSenha.value = ""
    } catch (error) {
      console.log("⚠️ Ocorreu um erro:", error.message)
    }
  })

async function pesquiseCPF() {
  alert("1")

  const user = users.find((user) => user.CPF === inputCPF.value.trim())

  try {
    if (users.find((user) => user.CPF === inputCPF.value.trim())) {
      Promise.resolve("CPF encontrado")
    } else {
      Promise.reject("CPF não encontrado!")
      alert("2")
      return
    }
    alert(`Usuário encontrado: ${user.Name}`)
    inputName.value = user.Name
    inputCellphone.value = user.Cellphone
    inputEmail.value = user.Email
    inputAddress.value = user.Address
    inputCPF.value = user.CPF
    inputSenha.value = user.Senha
    inputConfirmSenha.value = ""

    document.getElementById("toggleSenha").style.display = "none"

    return console.log(`Usuário encontrado: ${user.Name}`)
  } catch (error) {
    console.log("⚠️ ", error.message)
    return alert("⚠️ ", error.message)
  }
}

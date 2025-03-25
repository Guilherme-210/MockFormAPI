const inputfirstName = document.getElementById("firstName")
const inputLastName = document.getElementById("lastName")
const inputCPF = document.getElementById("CPF")
const inputCountryCode = document.getElementById("countryCode")
const inputCellphone = document.getElementById("cellphone")
const inputEmail = document.getElementById("email")
const inputCountry = document.getElementById("country")
const inputState = document.getElementById("state")
const inputCity = document.getElementById("city")
const inputCEP = document.getElementById("CEP")
const inputDistrict = document.getElementById("district")
const inputAddress = document.getElementById("address")
const inputAddressNumber = document.getElementById("addressNumber")
const inputComplement = document.getElementById("Complement")
const inputSenha = document.getElementById("senha")
const inputConfirmSenha = document.getElementById("confirmSenha")
let user = {}

document
  .getElementById("btnSubmit")
  .addEventListener("click", async function () {
    try {
      if (inputSenha.value.trim() !== confirmSenha.value.trim()) {
        Promise.reject("As senhas nao conferem")
        confirmSenha.classList.add("error")
        return
      } else {
        confirmSenha.classList.remove("error")
      }

      user = {
        FirstName: inputfirstName.value.trim(),
        LastName: inputLastName.value.trim(),
        CPF: inputCPF.value.trim(),
        CountryCode: inputCountryCode.value.trim(),
        Cellphone: inputCellphone.value.trim(),
        Email: inputEmail.value.trim(),
        Country: inputCountry.value.trim(),
        State: inputState.value.trim(),
        City: inputCity.value.trim(),
        CEP: inputCEP.value.trim(),
        District: inputDistrict.value.trim(),
        Address: inputAddress.value.trim(),
        AddressNumber: inputAddressNumber.value.trim(),
        Comment: inputComplement.value.trim(),
        Senha: inputSenha.value.trim(),
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

      inputfirstName.value = ""
      inputLastName.value = ""
      inputCPF.value = ""
      inputCountryCode.value = ""
      inputCellphone.value = ""
      inputEmail.value = ""
      inputCountry.value = ""
      inputState.value = ""
      inputCity.value = ""
      inputCEP.value = ""
      inputDistrict.value = ""
      inputAddress.value = ""
      inputSenha.value = ""
      inputConfirmSenha.value = ""
      inputAddressNumber.value = ""
      inputComplement.value = ""

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
  const cpf = inputCPF.value.trim()

  try {
    const response = await fetch(
      "https://67e05cc17635238f9aad538a.mockapi.io/api/v1/users"
    )
    if (!response.ok) return Promise.reject("Erro ao buscar usuários!")

    const users = await response.json()
    const user = users.find((user) => user.CPF === cpf)

    if (!user) return Promise.reject("CPF não encontrado!")

    inputfirstName.value = user.FirstName
    inputLastName.value = user.LastName
    inputCPF.value = user.CPF
    inputCountryCode.value = user.CountryCode
    inputCellphone.value = user.Cellphone
    inputEmail.value = user.Email
    inputCountry.value = user.Country
    inputState.value = user.State
    inputCity.value = user.City
    inputCEP.value = user.CEP
    inputDistrict.value = user.District
    inputAddress.value = user.Address
    inputAddressNumber.value = user.AddressNumber
    inputComplement.value = user.Comment
    inputSenha.value = user.Senha
    inputConfirmSenha.value = ""

    document.getElementById("toggleSenha").style.display = "none"
  } catch (error) {
    console.error("Erro:", error.message)
  }
}

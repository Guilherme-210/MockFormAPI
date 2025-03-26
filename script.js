import validateName from "./js/validateName.js"
import { validateCpfCnpj, formatCpfCnpj } from "./script/validateCpfCnpj.js"
import {
  formatDDI,
  formatCellphone,
  validateCellphone,
} from "./js/validateCellphone.js"
import validateEmail from "./script/validateEmail.js"
import validatePassword from "./script/validatePassword.js"

const inputfirstName = document.getElementById("firstName"),
  inputLastName = document.getElementById("lastName"),
  inputCPF = document.getElementById("CPF_CNPJ"),
  inputCountryCode = document.getElementById("countryCode"),
  inputCellphone = document.getElementById("cellphone"),
  inputEmail = document.getElementById("email"),
  inputCountry = document.getElementById("country"),
  inputState = document.getElementById("state"),
  inputCity = document.getElementById("city"),
  inputCEP = document.getElementById("CEP"),
  inputDistrict = document.getElementById("district"),
  inputAddress = document.getElementById("address"),
  inputAddressNumber = document.getElementById("addressNumber"),
  inputComplement = document.getElementById("Complement"),
  inputSenha = document.getElementById("senha"),
  inputConfirmSenha = document.getElementById("confirmSenha")
let user = {}

formatCpfCnpj()
formatDDI()
formatCellphone()

document
  .getElementById("btnSubmit")
  .addEventListener("click", async function () {
    try {
      if (!validateName()) {
        return
      }

      if (!validateCpfCnpj()) {
        return
      }
      inputCPF.classList.remove("error")

      if (!validateCellphone()) {
        return
      }
      inputCellphone.classList.remove("error")

      if (!validateEmail()) {
        return
      }
      inputEmail.classList.remove("error")

      if (!validatePassword()) {
        return
      }
      confirmSenha.classList.remove("error")

      user = {
        FirstName: inputfirstName.value.trim(),
        LastName: inputLastName.value.trim(),
        CPF_CNPJ: inputCPF.value.trim(),
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
          `⚠️ Erro de comunicação com o banco de dados, cadastro cancelado! \nTente novamente mais tarde.`
        )
        return Promise.reject(
          "⚠️ Erro de comunicação com o banco de dados, cadastro cancelado!"
        )
      }

      console.log("enviado")

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
      return Promise.resolve(
        console.log(`Usuário ${user.FirstName} cadastrado com sucesso!`)
      )
    } catch (error) {
      return console.log("⚠️ Ocorreu um erro:", error.message)
    }
  })

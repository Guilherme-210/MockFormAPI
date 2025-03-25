export default function validateCpfCnpj() {
  const CPF_CNPJ = document.getElementById("CPF_CNPJ")
  const value = document.getElementById("CPF_CNPJ").value.trim()

  try {
    if (value === "") {
      CPF_CNPJ.classList.add("error")
      alert("Campo de CPF/CNPJ não pode estar em branco.")
      Promise.reject("Campo de CPF/CNPJ não pode estar em branco.")
      return
    }

    if (value.length < 14) {
      CPF_CNPJ.classList.add("error")
      alert("Número minimo de caracter não atingido (11)")
      Promise.reject("Número minimo de caracter não atingido (11)")
      return
    } else if (value.length > 14 && value.length < 18) {
      CPF_CNPJ.classList.add("error")
      alert("Confira se não tem nenhum caracter a mais (11) ou faltando (14)")
      Promise.reject("Confira se não tem nenhum caracter a mais ou faltando")
      return
    }

    return Promise.resolve
  } catch (error) {
    console.error("⚠️ Erro na validação do CPF/CNPJ:", error)
    return false
  }
}

document
  .getElementById("toggleSenha")
  .addEventListener("click", function () {
    const inputSenha = document.getElementById("inputSenha")
    const toggleSenhaIcon = document.getElementById("toggleSenha")

    if (inputSenha.type === "password") {
      inputSenha.type = "text"
      toggleSenhaIcon.textContent = "🙈" // Ícone de "esconder"
    } else {
      inputSenha.type = "password"
      toggleSenhaIcon.textContent = "👁️" // Ícone de "mostrar"
    }
  })

  document
    .getElementById("toggleSenha2")
    .addEventListener("click", function () {
      const confirmSenha = document.getElementById("confirmSenha")
      const toggleSenhaIcon2 = document.getElementById("toggleSenha2")

      if (confirmSenha.type === "password") {
        confirmSenha.type = "text"
        toggleSenhaIcon2.textContent = "🙈" // Ícone de "esconder"
      } else {
        confirmSenha.type = "password"
        toggleSenhaIcon2.textContent = "👁️" // Ícone de "mostrar"
      }
    })
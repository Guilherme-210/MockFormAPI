const users = []

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

      const user = {
        name: document.getElementById("name").value.trim(),
        cellphone: document.getElementById("cellphone").value.trim(),
        email: document.getElementById("email").value.trim(),
        address: document.getElementById("address").value.trim(),
        senha: senha.value,
      }

      console.log(`Usuario cadastrado com sucesso: ` + user)

      users.push(user)
    } catch (error) {
      console.log("⚠️ Ocorreu um erro:", error.message)
    }
  })

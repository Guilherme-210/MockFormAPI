export function formatDDI() {
  document
    .getElementById("countryCode")
    .addEventListener("input", function (ev) {
      let value = ev.target.value.replace(/\D/g, "") // Remove tudo que não for número

      if (value.length <= 1) {
        alert("O campo de DDI não pode ficar em brenco.")
        Promise.reject("O campo de DDI não pode ficar em brenco.")
        country.classList.add("error")
        return
      }

      country.classList.remove("error")
      ev.target.value = value ? `+${value}` : "" // Adiciona "+" se houver número
      Promise.resolve
      return
    })
}
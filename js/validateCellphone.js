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

export function formatCellphone() {
  document.getElementById("cellphone").addEventListener("input", function (ev) {
    let value = ev.target.value.replace(/\D/g, "")

    if (value.length > 11) {
      value = value.slice(0, 11)
    }

    let formattedValue = ""
    if (value.length > 0) {
      formattedValue += "(" + value.substring(0, 2)
      if (value.length > 2) {
        formattedValue += ") "
        formattedValue += value.substring(2, 7)
        if (value.length > 7) {
          formattedValue += "-" + value.substring(7, 11)
        }
      } else if (value.length === 2) {
        formattedValue += ")"
      }
    }

    ev.target.value = formattedValue
  })
}

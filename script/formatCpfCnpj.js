export default function formatCpfCnpj() {
  document.getElementById("CPF_CNPJ").addEventListener("input", function (ev) {
    let value = ev.target.value.replace(/\D/g, "") // Remove tudo que não for número

    if (value.length <= 11) {
      // CPF: ###.###.###-##
      value = value.replace(/^(\d{3})(\d)/, "$1.$2")
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4")
    } else {
      // CNPJ: ##.###.###/####-##
      value = value.replace(/^(\d{2})(\d)/, "$1.$2")
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
      value = value.replace(
        /^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/,
        "$1.$2.$3/$4-$5"
      )
    }

    ev.target.value = value
  })
}

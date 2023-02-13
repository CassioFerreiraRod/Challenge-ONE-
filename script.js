const textArea = document.querySelector(".text-area")
const mensagem = document.querySelector(".mensagem")
const imagemFundo = document.getElementById("boneco")

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value)
  imagemFundo.style.backgroundImage = "none"
  mensagem.value = textoEncriptado
  textArea.value = ""
}

function encriptar(palavraEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ]
  palavraEncriptada = palavraEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (palavraEncriptada.includes(matrizCodigo[i][0])) {
      palavraEncriptada = palavraEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }
  return palavraEncriptada
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value)
  imagemFundo.style.backgroundImage = "none"
  mensagem.value = textoDesencriptado
  textArea.value = ""
}

function desencriptar(palavraDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ]
  palavraDesencriptada = palavraDesencriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (palavraDesencriptada.includes(matrizCodigo[i][1])) {
      palavraDesencriptada = palavraDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      )
    }
  }
  return palavraDesencriptada
}

function copiarTexto() {
  mensagem.select()
  mensagem.setSelectionRange(0, 999999)
  document.execCommand("copy")
  mensagem.value = ""
  alert("Texto copiado!")
}

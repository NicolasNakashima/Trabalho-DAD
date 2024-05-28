const search = document.getElementById("search");
const comandos = document.getElementsByClassName("comando");
const nomeComandos = document.getElementsByClassName("comand-title");
const codigos = document.getElementsByTagName("code");

console.log(nomeComandos);

console.log(nomeComandos);

const textoNulo = document.getElementById("texto-nulo");

search.addEventListener("keyup", () => {
  const valorCampo = search.value.toLowerCase();

  const tamanhoCampo = nomeComandos.length;
  let contador = 0;
  for (let i = 0; i < comandos.length; i++) {
    let valorComando = nomeComandos[i].textContent.toLowerCase();
    valorComando = valorComando.substring(0, tamanhoCampo);

    console.log(valorComando);

    if (valorCampo != valorComando) {
      nomeComandos[i].classList.add("invisivel");
    } else {
      comandos[i].classList.remove("invisivel");
    }

    if (comandos[i].classList.contains("invisivel")) {
      contador++;
    }
  }

  if (contador === comandos.length) {
    textoNulo.classList.remove("invisivel");
  } else {
    textoNulo.classList.add("invisivel");
  }
});

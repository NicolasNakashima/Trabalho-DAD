const search = document.getElementById("search");
const comandos = document.getElementsByClassName("comando");
const nomeComandos = document.getElementsByClassName("comand-title");
const codigos = document.getElementsByTagName("code");

comandos[1].classList.add("invisivel");

console.log(comandos[1].textContent);
console.log(nomeComandos[1].textContent);

const textoNulo = document.getElementById("texto-nulo");
textoNulo.style.display = "none";

search.addEventListener("keyup", () => {
  const valorCampo = search.value.toLowerCase().trim();
  const tamanhoCampo = valorCampo.length;

  for (let i = 0; i < nomeComandos.length; i++) {
    let valorComando = nomeComandos[i].textContent.toLocaleLowerCase().trim();
    valorComando = valorComando.substring(0, tamanhoCampo);

    let command = comandos[i];
    let contador = nomeComandos.length;

    if (valorCampo != valorComando) {
      command.style.display = "none";
      contador--;
    } else {
      command.style.display = "flex";
      command.style.flexDirection = "column";
    }

    if (contador < nomeComandos.length) {
      textoNulo.style.display = "flex";
    }
  }
});

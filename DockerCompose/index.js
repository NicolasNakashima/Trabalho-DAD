const visaoGeralTitulo = document.getElementById("O que e Docker-Compose-titulo");
const visaoGeralConteudo = document.getElementById("O que e Docker-Compose-conteudo");

const definicaoDockerTitulo = document.getElementById("Script-titulo");
const definicaoDockerConteudo = document.getElementById("Script-conteudo");

const dockerVsMaquinasVirtuaisTitulo = document.getElementById(
  "Como Usar-titulo"
);
const dockerVsMaquinasVirtuaisConteudo = document.getElementById(
  "Como Usar-conteudo"
);

// fazer a aba de vocabulário aprendido aparecer

let verificarCliqueDefinicaoDocker = false;
let verificarCliqueVisaoGeral = false;
let verificarCliqueDockerVsMaquinasVirtuais = false;

definicaoDockerTitulo.addEventListener("click", () => {
  verificarCliqueDefinicaoDocker = true;
  definicaoDockerConteudo.classList.toggle("invisivel");
  mostrarVocabularioAprendido();
});

visaoGeralTitulo.addEventListener("click", () => {
  verificarCliqueVisaoGeral = true;
  visaoGeralConteudo.classList.toggle("invisivel");
  mostrarVocabularioAprendido();
});

dockerVsMaquinasVirtuaisTitulo.addEventListener("click", () => {
  verificarCliqueDockerVsMaquinasVirtuais = true;
  dockerVsMaquinasVirtuaisConteudo.classList.toggle("invisivel");
  mostrarVocabularioAprendido();
});

console.log(verificarCliqueDefinicaoDocker);
console.log(verificarCliqueDockerVsMaquinasVirtuais);
console.log(verificarCliqueVisaoGeral);

function mostrarVocabularioAprendido() {
  if (
    verificarCliqueDefinicaoDocker == true &&
    verificarCliqueVisaoGeral == true &&
    verificarCliqueDockerVsMaquinasVirtuais == true
  ) {
    document
      .getElementById("vocabulario-aprendido")
      .classList.remove("invisivel");
  }
}

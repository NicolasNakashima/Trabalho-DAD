const visaoGeralTitulo = document.getElementById("visao-geral-titulo");
const visaoGeralConteudo = document.getElementById("visao-geral-conteudo");

const definicaoDockerTitulo = document.getElementById("oqueedocker-titulo");
const definicaoDockerConteudo = document.getElementById("oqueedocker-conteudo");

const dockerVsMaquinasVirtuaisTitulo = document.getElementById(
  "docker-vs-maquinas-virtuais-titulo"
);
const dockerVsMaquinasVirtuaisConteudo = document.getElementById(
  "docker-vs-maquinas-virtuais-conteudo"
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

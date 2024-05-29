const visaoGeralTitulo = document.getElementById("visao-geral-titulo");
const visaoGeralConteudo = document.getElementById("visao-geral-conteudo");

const definicaoDockerfile = document.getElementById("script-titulo");
const scriptExplicacao = document.getElementById("script-conteudo");

// fazer a aba de vocabulário aprendido aparecer

let verificarCliqueDefinicaoDocker = false;
let verificarCliqueVisaoGeral = false;

definicaoDockerfile.addEventListener("click", () => {
  verificarCliqueDefinicaoDocker = true;
  scriptExplicacao.classList.toggle("invisivel");
  mostrarVocabularioAprendido();
});

visaoGeralTitulo.addEventListener("click", () => {
  verificarCliqueVisaoGeral = true;
  visaoGeralConteudo.classList.toggle("invisivel");
  mostrarVocabularioAprendido();
});

console.log(verificarCliqueDefinicaoDocker);
console.log(verificarCliqueVisaoGeral);

function mostrarVocabularioAprendido() {
  if (
    verificarCliqueDefinicaoDocker == true &&
    verificarCliqueVisaoGeral == true
  ) {
    document
      .getElementById("vocabulario-aprendido")
      .classList.remove("invisivel");
  }
}

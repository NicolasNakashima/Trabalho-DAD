const imagemTitulo = document.getElementById("imagem-titulo");
const imagemConteudo = document.getElementById("imagem-conteudo");

const conteinerTitulo = document.getElementById("conteiner-titulo");
const conteinerConteudo = document.getElementById("conteiner-conteudo");

const ImagemVSConteinerTitulo = document.getElementById(
  "imagem-vs-conteiner-titulo"
);
const ImagemVSConteinerConteudo = document.getElementById(
  "imagem-vs-conteiner-conteudo"
);

const dockerhubTitulo = document.getElementById("dockerhub-titulo");
const dockerhubConteudo = document.getElementById("dockerhub-conteudo");

// fazer a aba de vocabulário aprendido aparecer

let verificarCliqueConteiner = false;
let verificarCliqueImagem = false;
let verificarCliqueImagemVSConteiner = false;
let verificarCliqueDockerHub = false;

conteinerTitulo.addEventListener("click", () => {
  verificarCliqueConteiner = true;
  conteinerConteudo.classList.toggle("invisivel");
  mostrarVocabularioAprendido();
});

imagemTitulo.addEventListener("click", () => {
  verificarCliqueImagem = true;
  imagemConteudo.classList.toggle("invisivel");
  mostrarVocabularioAprendido();
});

ImagemVSConteinerTitulo.addEventListener("click", () => {
  verificarCliqueImagemVSConteiner = true;
  ImagemVSConteinerConteudo.classList.toggle("invisivel");
  mostrarVocabularioAprendido();
});

dockerhubTitulo.addEventListener("click", () => {
  verificarCliqueDockerHub = true;
  dockerhubConteudo.classList.toggle("invisivel");
  mostrarVocabularioAprendido();
});

console.log(verificarCliqueConteiner);
console.log(verificarCliqueImagemVSConteiner);
console.log(verificarCliqueImagem);
console.log(verificarCliqueDockerHub);

function mostrarVocabularioAprendido() {
  if (
    verificarCliqueConteiner == true &&
    verificarCliqueImagem == true &&
    verificarCliqueImagemVSConteiner == true &&
    verificarCliqueDockerHub == true
  ) {
    document
      .getElementById("vocabulario-aprendido")
      .classList.remove("invisivel");
  }
}

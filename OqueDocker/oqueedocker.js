const tituloTopicos = document.querySelector(".titulo-topicos");
const conteudoBox = document.querySelector(".conteudo-box");

tituloTopicos.addEventListener("click", () => {
  conteudoBox.classList.toggle("invisivel");
});

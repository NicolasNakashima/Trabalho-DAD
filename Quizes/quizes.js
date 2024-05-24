const id = document.getElementById("tema");
const tema = id.textContent.split(" ")[1];
console.log(tema);
const enviar = document.getElementById("enviar");
const pontos = document.getElementById("pontos");


const respostasCorrestas = {
  //q1 q2 q3
  1: [1, 2, 3], // --> QUIZ 1 - questão1 resposta correta: opção 1
  2: [3, 2, 1], // --> QUIZ 2 - questão1 resposta correta: opção 3
  3: [1, 3, 2], // --> QUIZ 3 - questão1 resposta correta: opção 1
};
let pontuacao = 0;

enviar.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    +localStorage.getItem("verificacao") ||
    localStorage.getItem("verificacao") == undefined
  ) {
    const questoes = document.getElementsByClassName("questoes");
    console.log(questoes);
    const acertos = [];
    for (let i = 0; i < questoes.length; i++) {
      let questao = questoes[i].value[2];
      if (questoes[i].checked) {
        acertos.push(+questao);
      }
    }
    if (JSON.stringify(acertos) == JSON.stringify(respostasCorrestas[tema])) {
      console.log("certinho, parabéns");
    }

    for (i = 0; i < acertos.length; i++) {
      if (acertos[i] == respostasCorrestas[tema][i]) {
        pontuacao++;
      }
    }
    let respostas = JSON.parse(localStorage.getItem("acertos"));
    respostas[tema] = acertos;
    localStorage.setItem("acertos", JSON.stringify(respostas));
    localStorage.setItem("pontuacao", JSON.stringify(pontuacao));
    console.log(JSON.parse(localStorage.getItem("acertos")));
    console.log(JSON.parse(localStorage.getItem("pontuacao")));

    pontos.textContent = pontuacao;
    pontos.classList.remove("invisivel");

    // verificação de acesso
    setTimeout(500);

    localStorage.setItem("verificacao", JSON.stringify(0));

    console.log("1");
    document.documentElement.classList.add("cursor_none");
    enviar.classList.add("disabled_button");
  }
});

setTimeout(() => {
  console.log(localStorage.getItem("verificacao"));

  if (localStorage.getItem("verificacao") == 0) {
    document.documentElement.classList.add("cursor_none");
    enviar.classList.add("disabled_button");
    console.log("djskdjs");
  }
}, 1);

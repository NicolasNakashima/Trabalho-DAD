const burguinho = document.querySelector(".hamburguer")
console.log(burguinho)
const menu = document.querySelector(".opcoes")
console.log(menu)

burguinho.addEventListener("click", ()=>{
    menu.classList.toggle("escondido")
})
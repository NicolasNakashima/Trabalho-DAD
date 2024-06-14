const body = document.querySelector('body')
function abrirMenu(){
    const menu = document.querySelector("#menu")
    const fundo = document.createElement("div")
 
    menu.classList.add("aparecido")
 
    fundo.style.position = "fixed"
    fundo.style.width = "100%"
    fundo.style.height = "100vh"
    fundo.style.backgroundColor = "#0009"
    fundo.style.position = "fixed"
    fundo.style.top = "0"
    fundo.style.left = "0"
    fundo.style.zIndex = "6"
    fundo.style.display = "block"
 
    body.appendChild(fundo)
 
    fundo.addEventListener('click', () => {
        menu.classList.remove("aparecido")
        body.removeChild(fundo)
    })
}
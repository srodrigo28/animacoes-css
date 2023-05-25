/** Carre as variaveis */
const btnLogin = document.querySelector(".btn-login")
const form = document.querySelector("form");

/** Função 01 */
btnLogin.addEventListener("click", event => {
    event.preventDefault();    

    form.classList.add("form-saida");
});
/** Função 02 */
form.addEventListener("animationstart", event => {
    if(event.animationName === "down"){
        document.querySelector("body").style.overflow = "hidden"
    }
})
/** Função 03 */
form.addEventListener("animationend", (event) => {
    if(event.animationName === "down"){
        // faz o form permanecer fora da tela ate recarregar
        // form.style.display = "none"; 
        document.querySelector("body").style.overflow = "none"
    }
})
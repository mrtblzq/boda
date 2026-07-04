const sobre = document.getElementById("abrir");
const hero = document.querySelector(".hero");
const contenido = document.getElementById("contenido");

sobre.addEventListener("click", function () {

    hero.style.display = "none";

    contenido.style.opacity = "1";
    contenido.style.visibility = "visible";

});
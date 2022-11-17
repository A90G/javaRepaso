let imput1 = document.getElementById("texto");
let imput2 = document.getElementById("url");
let imput3 = document.getElementById("parrafo");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    let textoValue = texto.value;
    let urlValue = url.value;
    let parrafoValue = parrafo.value;

    document.getElementById("card-title").innerHTML = texto.value;
    document.getElementById("card-img-top").src = url.value;


});

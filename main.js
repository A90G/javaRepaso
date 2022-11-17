let imput1 = document.getElementById("texto");
let imput2 = document.getElementById("url");
let imput3 = document.getElementById("parrafo");
let btn = document.getElementById("btn");
let btnSwitch = document.getElementById("btnSwitch");

btn.addEventListener("click", () => {

    let textoValue = texto.value;
    let urlValue = url.value;
    let parrafoValue = parrafo.value;

    document.getElementById("card-title").innerHTML = texto.value;
    document.getElementById("card-img-top").src = url.value;
    document.getElementById("card-text").src = parrafo.value;

    console.log();
});

let segundos = 10;

function actualizarTiempo() {
    document.getElementById("btn_Bomba").innerHTML = "Quedan " + segundos + " segundos";
    if (segundos === 0) {
        console.log(https://static.vecteezy.com/system/resources/thumbnails/000/551/957/small/bomb_004.jpg);
    } else {
        segundos --;
        setTimeout("actualizarTiempo()", 10);
    }
}


/*let btn = document.querySelectorAll(".card");
btn.forEach(boton => {
    boton.addEventListener("click", agregarTarjeta);
});*/

btnSwitch.addEventListener('click', function(){
body.divcard.toggle('mostrar');
});

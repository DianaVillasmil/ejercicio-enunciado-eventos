function holaMundo(event) {
	alert("Hola Mundo");
}

function cargo(event) {
	alert("Esta pagina esta cargada");
}

function encima(event) {
	alert("Estas sobre mi");
}

function afuera(event) {
	alert("No estas sobre mi");
}

var boton = document.getElementById("demo");
boton.addEventListener("click", holaMundo);


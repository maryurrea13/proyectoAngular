'use strict'

window.addEventListener('load', function(){

	console.log("Dom cargado");
	var formulario= document.querySelector("#formulario");

	formulario.addEventListener('submit', function(){

		console.log("Evento Capturado");
	});



})
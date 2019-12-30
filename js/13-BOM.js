'use strict'
//Bom- brower object model

function getBom(){
	console.log(window.innerHeight);
	console.log(window.location); //saber url en la que esta


}


//redireccionar
function redirect(url){
	window.location.href= url;

}

function abrirVentana(url){
	//window.open(url);
	window.open(url, "", "width=400, height=300");

}


getBom();


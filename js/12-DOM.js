'use strict'

function cambiarColor(color){
	caja.style.background=color;
}

//div con Id definido
var caja=document.querySelector("#micaja");

caja.innerHTML="HOLAAAA";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";
caja.className="hola";

console.log(caja);

//Modificar div sin saber su id
//conseguir elementos por su etiqueta
var todosLosDivs= document.getElementsByTagName('div');
var seccion= document.querySelector('#miseccion');
var posicion;

for(posicion in todosLosDivs){
	if(typeof todosLosDivs[posicion].textContent=='string'){
		//crear un parrafo
		var parrafo= document.createElement("p");
		var texto= document.createTextNode(todosLosDivs[posicion].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}

}
//conseguir elementos por su clase css

var divsRojos= document.getElementsByClassName('rojo');
//divsRojos es un vector que contiene todos los divs cuya clase css es rojo
var pos;

for (pos in divsRojos){
	if(divsRojos[pos].className=="rojo"){
		divsRojos[pos].style.background="red";
	}

}

console.log(divsRojos);



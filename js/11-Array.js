'use strict'

/* Hacer un programa que 
1- pida 6 numeros y los guarde en un array
2- mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3- Sacar el array organizado y mostrarlo
4- invertir su orden y mostrarlo
5- Mostrar cuantos elementos tiene el array
6- Hacer una busqueda de un valor introducido por el usuario y que
nos diga si esta en el array con su posicion
*/

//1-

var numeros=new Array(6);

for (var i = 0; i<numeros.length; i++) {
	 numeros[i]=parseInt(prompt("Ingrese un numero",""));
}

console.log(numeros);
document.write("<h1>Los datos ingresados son:</h1>");
for (var i = 0; i<numeros.length; i++) {
	 document.write("<h5>"+numeros[i]+"</h5>");
}
//ordenar y mostrar
numeros.sort();
console.log(numeros);

//invertir orden y mostrarlo
numeros.reverse();
console.log(numeros);

//Busqueda
var busqueda=parseInt(prompt("ingresa un numero a buscar",""));

var posicion=numeros.findIndex(busqueda);

var nombres= new Array;
var i;
for(i=0; i<3; i++ ){
	nombres[i]="hola";
}
console.log(nombres[0]);
'use strict'

/*
Mostrar todos los divisores de un numero ingresado
*/

var num=parseInt(prompt("Ingrese el numero: ",0));

document.write("<h1>Estos son los divisores del numero: "+num+"</h1>");

for(var i=0; i<=num;i++){
	if(num%i==0){
		document.write(i+"</br>");
	}

}
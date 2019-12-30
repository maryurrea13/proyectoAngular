'use strict'

/*
Numeros impares entre dos numeros
*/

var num1=parseInt(prompt("Introduce el primero numero",0));
var num2=parseInt(prompt("Introduce el segundo numero",0));

document.write("<h1>De "+num1+" a "+num2+" estan estos numeros </h1>");
for(num1; num1<=num2;num1++){

	if(num1%2!=0){
		document.write(num1+"</br>");
	}

}
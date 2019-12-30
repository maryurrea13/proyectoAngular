'use strict'

/*
programa que pida dos numeros y que nos diga
cual es el mayor, cual es el menor y si son iguales
Si los numeros no son numeros o son iguales a cero, volver a pedir
*/


do{
	var num1=parseInt(prompt("Introduce el primer numero: ",0));
	var num2=parseInt(prompt("Introduce el segundo numero: ",0));
	console.log("numero 1: ",num1," numero 2 ",num2);
}while(num1<=0 ||num2<=0||isNaN(num1)||isNaN(num2));

if(num1==num2){
	alert("los numeros son iguales");
}else if(num1>num2){
	alert("el numero "+num1+" es el mayor");
}else{
	alert("el numero "+num2+" es el mayor");
}
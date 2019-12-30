'use strict'

/*
Usando un bucle mostrar la media, la suma de dos numeros hasta que el usuario colocque un numero negativo
*/

var suma=0;
var c=0;

do{
	var num=parseInt(prompt("introduce numeros hasta que ingreses uno negativo",0));
	if(isNaN(num)){
		num=0;
	}else if(num>=0){
		suma+=num;
		c++;
	}
	console.log(suma, c);
}while(num>=0);

alert("la sumatoria total es: "+suma);
alert("la media es: "+(suma/c));

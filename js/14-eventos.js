'use strict'

window.addEventListener('load', ()=>{
	
	function cambiarColor(){
		var bg= boton.style.background;
		if(bg=="green"){
			boton.style.background="red";

		}else{
			boton.style.background="green"
		}

		boton.style.padding="10px"
		boton.style.border ="1px solid #ccc";
		return true;


	}

	var boton= document.querySelector("#boton");

	//evento Click
	boton.addEventListener('click', function(){
		cambiarColor();
	});
	//Mouse over
	boton.addEventListener('mouseover', function(){
		boton.style.background="green";
	});
	//Mouse out
	boton.addEventListener('mouseout', function(){
		boton.style.background="#ccc";
	});

	//focus
	var input= document.querySelector("#campo");
	input.addEventListener('focus', function(){
		console.log("Estas dentro del input");
	});

	//blur
	input.addEventListener('blur', function(){
		console.log("Estas fuera del input");
	});


	//Keydown
	input.addEventListener('keydown', function(event){
		console.log("Estas pulsando esta tecla ",String.fromCharCode(event.keyCode) );

	});


	//Keypess
	input.addEventListener('keypress', function(event){
		console.log("Estas presionando esta tecla ",String.fromCharCode(event.keyCode) );

	});

	//Keyup cuando levando el dedo de la tecla
	input.addEventListener('keyUp', function(event){
		console.log("tecla solatada ",String.fromCharCode(event.keyCode) );

	});
});


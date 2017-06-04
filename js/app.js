
var contador = 0;
var contadorLetras = 140;
var cargarPagina = function () {
	//obtener elementos
	// $('#mensaje').keyup(desabilitarBtn);
	$('#agregar').click(imprimir,desabilitarBtn);
}

	var imprimir = function(e){
		e.preventDefault();
<<<<<<< HEAD
	// obtener elementos
	var lienzo = $('#lienzo');
	var txtMensaje = $('#mensaje');
	//crear elementos
<<<<<<< HEAD
	// $(dondeInserta).append("<p class='jumbotron'>");
=======
>>>>>>> 2d543927f3f35c3447ba7a76d927d5a80c2b290f
	var parrafo = $('<p />');
	//estilos a los elementos 
	parrafo.addClass('jumbotron')
	//agregar elementos 
	parrafo.text(txtMensaje.val());
	//agregar 
	lienzo.append(parrafo);
<<<<<<< HEAD

	txtMensaje.val("");

}

// window.addEventListener('load',cargarPagina);
=======
	txtMensaje.val("");

}
>>>>>>> 2d543927f3f35c3447ba7a76d927d5a80c2b290f
=======
		//quiero que texto reciba a textarea
		//eq(1) te da el elemento que tiene ese indice
		var texto = $(this).prev().children().eq(1); 
		console.log(texto);
		//crear variables
		var identificador = 'parrafo' + contador; 
		// obtener elementos
		var lienzo = $('#lienzo');
		//crear elementos
		var parrafo = $("<p />", { "class": "jumbotron" });
		console.log(parrafo);
		//estilos a los elementos 
		parrafo.attr("id",identificador);
		//agregar elementos 
		parrafo.text(texto.val());
		//agregar al html
		lienzo.append(parrafo);
		texto.val("");
		contador++;
		console.log('de boton' + contador);
	}

	var desabilitarBtn = function(e){
		// console.log(this);
		e.preventDefault();
		var txtComentario = $(this).prev().children().next();
		console.log(txtComentario.val());
		if(txtComentario.val() == ""){
			console.log('blanco');
		}else{
			console.log('texto');
		}
		

	}


>>>>>>> 7c93a990ca71d5a12141c54dabddc0323be0d6c5
$(document).ready(cargarPagina);
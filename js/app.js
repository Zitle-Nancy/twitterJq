
var contador = 0;
var contadorLetras = 140;
var cargarPagina = function () {
	//obtener elementos
	// $('#mensaje').keyup(desabilitarBtn);
	$('#agregar').click(imprimir,desabilitarBtn);
}

	var imprimir = function(e){
		e.preventDefault();
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


$(document).ready(cargarPagina);
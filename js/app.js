var contador = 0;
	var cargarPagina = function () {
		//obtener elementos
		$('#mensaje').keyup(desabilitarBtn);
		$('#mensaje').keyup(letrasColor);
		$('#agregar').click(imprimir);
	}
	var imprimir = function(e){
		e.preventDefault();
		//quiero que texto reciba a textarea
		//eq(1) te da el elemento que tiene ese indice
		var texto = $(this).prev().children().eq(1); 
		// console.log(texto);
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
	var desabilitarBtn = function(){
		// obtener el boton de agregar para cambiar su atributo
		var boton = $(this).parent().siblings().first();
		var txtComentario = $(this);
		var contar = txtComentario.val().length;
		console.log(contar);
		var restaCaracteres = 140 - contar;
		var contadorLetras = $('#contador-letras');
		contadorLetras.html("Total de Caracteres: " + restaCaracteres);
		if(txtComentario.val().trim().length <= 0 || txtComentario.val().length > 140 ){
			boton.attr('disabled',true);
		}else{
			boton.removeAttr('disabled');
			// txtComentario.length = 0;
		}

	}

	var letrasColor = function(){
		var labelLetras = $('#contador-letras');
		// console.log(labelLetras);
		var cajaTexto = $('#mensaje').val().length;
		console.log(cajaTexto);
		switch(cajaTexto){
			case 119:
			labelLetras.removeClass('color-uno');
			labelLetras.removeClass('color-dos');
			labelLetras.removeClass('color-tres');
			break;
			case 120:
			labelLetras.addClass('color-uno');
			labelLetras.removeClass('color-dos');
			labelLetras.removeClass('color-tres');
			break;
			case 130: 
			labelLetras.addClass('color-dos');
			labelLetras.removeClass('color-uno');
			labelLetras.removeClass('color-tres');
			break;
			case 140:
			labelLetras.addClass('color-tres');
			labelLetras.removeClass('color-dos');
			labelLetras.removeClass('color-uno');
			break;
		}
	}
$(document).ready(cargarPagina);
var cargarPagina = function () {
	//obtener elementos
	var btn = $('#agregar');
	//funcionalidad 
	btn.click(imprimir);
}
	function imprimir(e){
		e.preventDefault();
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
$(document).ready(cargarPagina);
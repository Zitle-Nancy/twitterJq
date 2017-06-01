// alert('hola');
// var lienzo =  document.getElementById('')

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
	// $(dondeInserta).append("<p class='jumbotron'>");
	var parrafo = $('<p />');
	//estilos a los elementos 
	parrafo.addClass('jumbotron')
	//agregar elementos 
	parrafo.text(txtMensaje.val());
	//agregar 
	lienzo.append(parrafo);

	txtMensaje.val("");

}

// window.addEventListener('load',cargarPagina);
$(document).ready(cargarPagina);
let tituloNota;
let textoNota;
let temaNota;
let agregarNota;
let notas = [];
let contenedor;

window.addEventListener('load',inicializar,true);

function inicializar(){
	tituloNota=document.getElementsById('tituloNota');
	textoNota=document.getElementsById('texto-nota');
	temaNota=document.getElementsById('tema-nota');
	agregarNota=document.getElementsById('agregar-nota');

	contenedor=document.querySelector('.contenedor-notas');

	agregarNota.addEventListener('click',addNota,true);

}

function addNota(){
	nuevaNota={
		titulo: tituloNota.value,
		texto: textoNota.value,
		tema: temaNota.value,
	};
	nota.push(nuevaNota);

	contenedor.innerHTML+="div class='nota"+nuevaNota.tema+"><h2>"+nuevaNota.titulo+"</h2><p>"+nuevaNota.texto+"</p></div>"
}

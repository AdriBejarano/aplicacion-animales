

let arreglo = [ 
	{ name: 'Kiara', tipo:'Perro'},
	{ name: 'Leticio', tipo:'Gato'},
	{ name: 'Joaquin', tipo:'Loro'},
	{ name: 'lalo', tipo:'Delfin'},
	{ name: 'lolo', tipo:'Leon'},
]; //CORCHETES

// SELECCIONAR LISTA DE HTML
let listaMascotas = document.getElementById('lista');
let listadoHTML = '';

for(	let indice=0;	indice < arreglo.length;	indice++){

	console.log(indice, ' - ', arreglo[indice] )
	
	listadoHTML = listadoHTML +`
	<li><a ref="">
	<ion-icon name="trash"></ion-icon>
	<span class="mr-2">${arreglo[indice].name}</span>
	<span class="badge badge-secondary"> ${arreglo[indice].tipo}</span>
	</a></li>`;
			
}
console.log('--listadoHTML--', listadoHTML)

listaMascotas.innerHTML = listadoHTML;
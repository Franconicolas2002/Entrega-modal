// Carrusel modificado

const miCarrusel = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(miCarrusel, {
    ride: true,
    interval : 3000,
    pause: false
})

miCarrusel.addEventListener('slide.bs.carousel', function(){
    console.log('Se muestra un slide');
    //document.getElementById('veces').innerHTML = (event.relatedTarget).length
    document.getElementById('ingresarAlgo').innerHTML += '<p>Ha pasado el slide.</p>'
});

// funcion modal para manipular los eventos

const miVentanaEmergente = document.getElementById('ventanaEmergente')

// Agregar un observador sobre el modal

miVentanaEmergente.addEventListener('show.bs.modal', function(){
    console.log('se esta abriendo el modal')

    // Reconocer el elemento que habilita el evento modal

    let boton = event.relatedTarget  // Etiquetado relacionado

    let mensaje = boton.getAttribute('data-titulo')

    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('tituloModal').innerText = mensaje
    document.querySelector('.modal-body').innerHTML = contenido
})

miVentanaEmergente.addEventListener('shown.bs.modal', function(){
    console.log('se abrio el modal')
})

miVentanaEmergente.addEventListener('hide.bs.modal', function(){
    console.log('se esta cerrando el modal')
})

miVentanaEmergente.addEventListener('hidden.bs.modal', function(){
    console.log('esta cerrado el modal')
})


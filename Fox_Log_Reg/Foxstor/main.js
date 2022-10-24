 const fila = document.querySelector('.contenedor-carusel');
 const peliculas = document.querySelectorAll('.pelicula');

 const flechaIzquieda = document.getElementById('flecha-izquierda');
 const flechaDerecha = document.getElementById('flecha-derecha');

 flechaDerecha.addEventListener('click',() => {
     fila.scrollLeft += fila.offsetWidth;
 });

 flechaIzquieda.addEventListener('click',() => {
    fila.scrollLeft -= fila.offsetWidth;
});

const numeroPaginas = Math.ceil(peliculas.length /5);

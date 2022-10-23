 const fila = document.querySelector('.contenedor-carusel');
 const peliculas = document.querySelector('.pelicula');
 const flechaIzquieda = document.getElementById('flecha-izquierda');
 const flechaDerecha = document.getElementById('flecha-derecha');

 flechaDerecha.addEventListener('click',() => {
     fila.scrollLeft += fila.offsetWidth

     const indicadorActivo = document.querySelector('.indicadores .activo');
     if(indicadorActivo.nextSibling){
         indicadorActivo.nextSibling.classList.add('avtivo');
         indicadorActivo.classList.remove('activo');
     }
 });
 flechaIzquieda.addEventListener('click',() => {
    fila.scrollLeft -= fila.offsetWidth
});

const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    document.querySelector('.indicadores').appendChild(indicador);
   
}
import peliculas from './peliculas.js'

function PeliculasPorGenero(idGenero) {
    return peliculas.filter(pelicula => pelicula.genre_ids.includes(idGenero));
}

function mostrarSeccion(idGenero, idSeccion) {
    const genero = document.getElementById(idSeccion);
    const peliculasFiltradas = PeliculasPorGenero(idGenero);

    peliculasFiltradas.forEach(pelicula => {
        const peliculaDiv = document.createElement('div');
        peliculaDiv.classList.add('pelicula');

        const imagen = document.createElement('img');
        imagen.src = 'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path;
        imagen.alt = 'Imagen de la pelicula ' + pelicula.title;

        const titulo = document.createElement('p');
        titulo.classList.add('tittle')
        titulo.textContent = pelicula.title;

        peliculaDiv.appendChild(imagen);
        peliculaDiv.appendChild(titulo);
        genero.appendChild(peliculaDiv);
    });
}

mostrarSeccion(28, 'genero-28');
mostrarSeccion(53, 'genero-53');
mostrarSeccion(12, 'genero-12');
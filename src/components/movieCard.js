import React from 'react';

export default function MovieCard({movie}) {
    return (
        <div>
            <img src={movie.Poster} alt={movie.Title}/>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <p>{movie.Type}</p>
            <button>Nominate</button>
        </div>
    )
}
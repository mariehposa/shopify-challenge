import React from 'react';

export default function MovieCard({movie}) {
    return (
        <div>
            <img src={movie.poster} alt={movie.title}/>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <p>{movie.type}</p>
        </div>
    )
}
import React from 'react'

function Card({movie}) {
  return (
    <div className='movie'>
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <a href={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster != 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}></img>
            </a>
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
    </div>
  )
}

export default Card

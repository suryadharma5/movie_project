import React from 'react'

function Card({movie}) {
  const baseImgURL = process.env.REACT_APP_BASEIMGURL
  return (
    <div className='movie'>
          <div>
            <p>{movie.release_date}</p>
          </div>
          <div>
            <a href={`/movie/${movie.id}`}>
              <img src={movie.poster_path != 'N/A' ? `${baseImgURL}/${movie.poster_path}` : 'https://via.placeholder.com/400'}></img>
            </a>
          </div>
          <div>
            <h3>{movie.title}</h3>
          </div>
    </div>
  )
}

export default Card

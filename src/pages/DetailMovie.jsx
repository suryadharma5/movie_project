import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Detail.css'

const url = process.env.REACT_APP_BASEURL
const key = process.env.REACT_APP_APIKEY



function DetailMovie(props) {
    var id = useParams()
    const ids = id.movieId

    const API_URL = `${url}?i=${ids}&apikey=${key}`
    const [movie, setMovie] = useState();

    const fetchMovie = async()=>{
        const respones = await fetch(`${API_URL}`)
        const data = await respones.json()
        console.log(data.Ratings.value)
        setMovie(data)
    }

    const getIMDbRating = (movie) => {
        const imdbRating = movie.Ratings.find(
          (rating) => rating.Source === "Internet Movie Database"
        );
      
        return imdbRating ? imdbRating.Value : "N/A";
      };


    useEffect(()=> {
        fetchMovie()
    }, [])

    if(!movie){
        return <div>Loading...</div>
    }

    return (
      <div className='wrapper container justify-content-start flex-row py-3 px-4'>
        <div className="row">
            <div className="col-lg-12 d-flex flex-row align-items-center">
                <a href="/" className='text-decoration-none'>
                    <h2 class="back-button bi bi-arrow-left-circle"></h2>
                </a>
                <h2 className='ngawur col-lg-12 fw-bold ms-4'>Movie Detail</h2>
            </div>
        </div>

        <div className='row mb-4'>
            <div className="col-lg-4 mt-3">
                <img src={movie.Poster} className='poster img-fluid rounded-2' alt="" width={500}/>
            </div>

            <div className="col-lg-6 mt-3 ms-4">
                <h4 className='fw-bold text-white text-start'>{movie.Title}</h4>

                <div className="detail row d-flex flex-row ms-1 mt-3">
                    <div className="genre d-flex align-items-center flex-column mb-4 me-3 py-3">
                        <p className='text-center'>
                            <span>Rate</span>
                            <br />
                            <span className='fw-bold fs-5'>{getIMDbRating(movie)}</span>
                        </p>
                    </div>
                    <div className="genre d-flex align-items-center flex-column mb-4 me-3 py-3">
                        <small>Type</small>
                        <p className='fw-bold fs-5'>{movie.Type}</p>
                    </div>
                    <div className="genre d-flex align-items-center flex-column mb-4 py-3">
                        <small>Duration</small>
                        <p className='fw-bold fs-5'>{movie.Runtime}</p>
                    </div>
                    <div className="tes">
                    </div>
                </div>

                <div className="col-lg-8 mt-2">
                    <h5 className='text-white fw-bold'>Released</h5>
                    <p>{movie.Released}</p>
                </div>

                <div className="col-lg-8">
                    <h5 className='text-white fw-bold'>Plot</h5>
                    <p>"{movie.Plot}"</p>
                </div>

                <div className="col-lg-8 mt-2">
                    <h5 className='text-white fw-bold'>Genre</h5>
                    <p>{movie.Genre}</p>
                </div>

                <div className="col-lg-8 mt-2">
                    <h5 className='text-white fw-bold'>Director</h5>
                    <p>{movie.Director}</p>
                </div>

                <div className="col-lg-8 mt-2">
                    <h5 className='text-white fw-bold'>Actors</h5>
                    <p>{movie.Actors}</p>
                </div>
                
            </div>
        </div>
      </div>
    )
}

export default DetailMovie

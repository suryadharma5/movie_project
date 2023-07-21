import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Detail.css'
import axios from 'axios'

const apiKey = process.env.REACT_APP_APIKEY
const baseURL = process.env.REACT_APP_BASEURL
const baseImgURL = process.env.REACT_APP_BASEIMGURL





function DetailMovie(props) {
    var id = useParams()
    const ids = id.movieId

    const API_URL = `${baseURL}/movie/${ids}?api_key=${apiKey}`

    const [movie, setMovie] = useState();

    const fetchMovie = async()=>{
        axios.get(API_URL)
        .then((response)=>{
            const data = response
            setMovie(data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }



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
                <img src= {`${baseImgURL}/${movie.poster_path}`} className='poster img-fluid rounded-2' alt="" height={200}/>
            </div>

            <div className="col-lg-6 mt-3 ms-4">
                <h4 className='fw-bold text-white text-start'>{movie.title}</h4>

                <div className="detail row d-flex flex-row ms-1 mt-3">
                    <div className="genre d-flex align-items-center flex-column mb-4 me-3 py-3">
                        <p className='text-center'>
                            <span>Rate</span>
                            <br />
                            <span className='fw-bold fs-5'>{movie.vote_average.toFixed(1)}</span>
                        </p>
                    </div>
                    <div className="tes">
                    </div>
                </div>

                <div className="col-lg-8">
                    <h5 className='text-white fw-bold'>Plot</h5>
                    <p>"{movie.overview}"</p>
                </div>

                <div className="col-lg-8 mt-2">
                    <h5 className='text-white fw-bold'>Original Languages</h5>
                    <p>{movie.original_language}</p>
                </div>

                <div className="col-lg-8 mt-2">
                    <h5 className='text-white fw-bold'>Release Date</h5>
                    <p>{movie.release_date}</p>
                </div>
                
            </div>
        </div>
      </div>
    )
}

export default DetailMovie

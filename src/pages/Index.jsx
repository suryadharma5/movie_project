import React from "react";
import { useEffect, useState } from 'react'
import SearchIcon from '../search.svg'
import Card from '../components/Card'
import '../App.css'
import axios from 'axios';

const apiKey = process.env.REACT_APP_APIKEY
const baseURL = process.env.REACT_APP_BASEURL
const API_URL = `${baseURL}/movie/popular?page=1&api_key=${apiKey}`

const Home = (props) => {
    const[movies, setMovies] = useState([]);
    const[title, setTitle] = useState('Popular Movies')

    const searchMovie = (title) => {
      const searchParams = `${baseURL}/search/movie?query=${title}&page=1&api_key=${apiKey}`
      axios.get((title.length === 0) ? API_URL : searchParams)
        .then((response)=> {
          const data = response
          setMovies(data.data.results)
        }).catch((error)=>{
          console.log(error)
        })
    }

    useEffect(()=>{
      searchMovie(props.searchTerm)
    }, [props.searchTerm])

    return(
        <div className="container">
            <h1 className="col-lg-12 text-center my-0">{(props.searchTerm.length === 0) ? title : `Results for "${props.searchTerm}"`}</h1>
            
            {
              movies?.length > 0 
              ?
              (
                <div className='container'>
                  {movies.map((movie) => 
                    <Card movie={movie}/>
                  )}
                </div>
              )
              :
              (
                <div className='empty'>
                  <h2>No Movie Found</h2>
                </div>
              )
            }

        </div>
    )
}

export default Home;
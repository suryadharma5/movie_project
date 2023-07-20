import React from "react";
import { useEffect, useState } from 'react'
import SearchIcon from '../search.svg'
import Card from '../components/Card'
import '../App.css'
import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=53159827'

const Home = (props) => {
    const[movies, setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('a');
  

    const searchMovie = (title) => {
      axios.get(`${API_URL}&s=${title}`)
      .then((response)=> {
        const data = response
        // console.log(data.data.Search)
        setMovies(data.data.Search)
      }).catch((error)=>{
        console.log(error)
      })
      
    }

    
    if(props.searchTerm){
      if(props.searchTerm.length > 2){
        searchMovie(props.searchTerm)
      }
      
    }
    
    useEffect(()=>{
      searchMovie({searchTerm})
    }, [])

    return(
        <div className="container">
            <h1 className="col-lg-12 text-center my-0">Movie Land</h1>

            {/* <div className='search'>
              <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
              <img src={SearchIcon} onClick={() => searchMovie(searchTerm)}></img>
            </div> */}

            {/* Movies Card */}
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
import React from "react";
import { useEffect, useState } from 'react'
import SearchIcon from '../search.svg'
import Card from '../components/Card'
import '../App.css'
import axios from 'axios';

const id = process.env.REACT_APP_BASEID
const url = process.env.REACT_APP_BASEURL
const key = process.env.REACT_APP_APIKEY
const API_URL = `${url}?i=${id}&apikey=${key}`
const API_DEFAULT = `${url}?i=${id}&apikey=${key}&s=[object%20Object]`;

const Home = (props) => {
    const[movies, setMovies] = useState([]);

    const searchMovie = (title) => {
      const searchParams = `${API_URL}&s=${title}`
      axios.get(`${title.length === 0 ? API_DEFAULT : searchParams}`)
        .then((response)=> {
          const data = response
          setMovies(data.data.Search)
        }).catch((error)=>{
          console.log(error)
        })
    }

    useEffect(()=>{
      searchMovie(props.searchTerm)
    }, [props.searchTerm])

    return(
        <div className="container">
            <h1 className="col-lg-12 text-center my-0">Movie Land</h1>

            {/* <div className='search'>
              <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
              <img src={SearchIcon} onClick={() => searchMovie(searchTerm)}></img>
            </div> */}

            
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
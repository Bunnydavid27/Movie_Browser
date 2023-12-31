import { useEffect, useState } from "react";
import React from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
 //2b180c5c


 const API_URL = 'http://www.omdbapi.com?apikey=2b180c5c';
// const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=2b180c5c';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([''])
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('spiderman');
    }, []);

    return(
        <div className='app'>
        <h1> Movies Hub </h1>
        <div className='search'>
            <input placeholder='Surf for Movies' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
            <img src = {SearchIcon} alt='search' onClick={()=> searchMovies(searchTerm)}/>

        </div>
        {
            movies?.length>0
            ? (
            <div className="container">
            {
                movies.map((movie) => (
                    <MovieCard movie = {movie}/>
                
                ))}
        </div>
        ) : (
            <div className="Empty">
                <h2>No Movies Found</h2>
            </div>
        )
        }
        </div>
    );
}



export default App;
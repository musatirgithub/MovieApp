import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Search from '../components/Search';
import MovieCard from '../components/MovieCard';

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieDiscover, setMovieDiscover] = useState([])
    const [search, setSearch] = useState('')
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = search === '' ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;
    const getData = async ()=>{
        try {
            const {data} = await axios.get(url);
            setMovieDiscover(data.results);
            setIsLoading(false); 
        } catch (error) {
            console.log(error);
        }}

useEffect(() => {
    getData();
}, [search])

    if (isLoading){
        return <div>Loading...</div>
    } else {
        return <main>
        <Search search={search} setSearch={setSearch}/>
        <MovieCard  movieDiscover={movieDiscover}/>
        </main>
    }
}

export default Main
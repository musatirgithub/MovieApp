import React from 'react';
import { useState } from 'react';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Search = ({search, setSearch}) => {
  const {loggedUser, setLoggedUser} = useContext(UserContext);
    const [input, setInput] = useState('');

    const handleSubmit = (e)=>{
    if (!loggedUser){
      return alert('Please sign in to search a movie')
    }
    e.preventDefault();
    setSearch(input);
    setInput('');
}

  return (
    <form className='d-flex gap-2 justify-content-center align-items-center py-3'>

    <input type="text" 
    style={{width:'15rem'}}
    className="form-control" 
    id="movieSearch" 
    placeholder='Search a movie...'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />

  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Search</button>
</form>
  )
}

export default Search
import React, { useState } from 'react';
import axios from "axios";

const Search = ({setLoc, setChar}) => {

const [search, setSearch] = useState ("")

const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${search}`)
    .then(res => {
        setLoc(res?.data)
        setChar(res?.data.residents)
    })
}

    return (
        <div className='search'> 
            <input 
            className='input'
            placeholder="insert ID"
            type="text" 
            onChange={e => setSearch(e.target.value)} 
            value={search}
            /> 

            <button  className='searchButton' onClick={searchType}>🔍</button>
        </div>
    );
};

export default Search;
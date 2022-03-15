import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const CharInfo = ({ charUrl }) => {

    const [resident, setResident] = useState({})
    const [episode, setEpisodes] = useState(0)
   
    useEffect(() => {
        axios.get(charUrl)
            .then(res => {
                setResident(res.data); 
                setEpisodes(res.data.episode)})
    }, [charUrl]) 

    const episodes =  episode.length

    return (
        <div className='card'>
            <img className='residentsImg' src={resident.image} alt="" />
            <h1 className='name'>{resident.name}</h1>
            <h2><span className='data'>STATUS: </span>{resident.status}</h2>
             <h2><span className='data'>ORIGIN: </span>{resident.origin?.name}</h2> 
            <h2><span className='data'>EPISODES WHERE APPEARS: </span>{episodes}</h2>
        </div>
    );
};

export default CharInfo;
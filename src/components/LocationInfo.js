import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import Search from './SearchBox';
import ResidentsList from './ResidentsList';

const Rick = () => {

    const [loc, setLoc] = useState({})
    const [chars, setChar] = useState([])

    useEffect(() => {
        const random = Math.floor(Math.random() * 125) + 1; //125 +1 porque son 126 locaciones,, pero el match.random cuenta desde 0
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => {
                setLoc(res?.data)
                setChar(res.data?.residents)
            })
    }, []);

    return (
        <div>
            <Search setLoc={setLoc} setChar={setChar} />
            <div className="titleSection">
                <h2><span className="name">{loc.name}</span> <span className="id">Id: {loc.id}</span></h2>
            </div>
            <div className="infoSection">
                <h2>Type: {loc.type} <span className="dimension"> Dimension: {loc.dimension} </span> Population: {loc.residents?.length}</h2>
            </div>
            {<ResidentsList characters={chars} />}
        </div>
    );
};

export default Rick;


import { useState} from "react";
import React from 'react';
import CharInfo from './ResidentInfo';

const RickList = ({ characters }) => {

    console.log(characters) //sólo para visualizar lo que estoy recibiendo

   const totalPages = Math.ceil(characters?.length / 3);

    const [currentPage, setCurrentPage] = useState(0);

    const filtered = characters.slice(currentPage, currentPage + 3)

    const buttNext = () =>{
        if(currentPage <= totalPages)
        setCurrentPage(currentPage + 3)
      } 
    
      const buttPrevious = () =>{
        if(currentPage > 0)
        setCurrentPage(currentPage - 3)
      }

      console.log(currentPage)
      console.log(characters.length)
    return (
        <div>
            <h1>Characters</h1>
            <div className='grid'>{
                   filtered.map(character => (
                    <CharInfo charUrl={character} key={character} />
                ))
            }
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn_btn-primary" onClick={ buttPrevious }> ⏪ </button>
        <button type="button" className="btn_btn-primary" onClick={ buttNext }> ⏩ </button>
      </div>
        </div>
    );
};

export default RickList;

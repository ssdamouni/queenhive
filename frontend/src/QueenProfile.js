import { Redirect, useParams } from "react-router-dom";

import React from "react";

const QueenProfile = ({queens}) =>{
    const { id } = useParams();
    console.log(queens)
    let queen = queens.find(o => o.id == id);
    console.log(queen)
  
    return(
        <div>
            <h2 key={queen.id}>{queen.name}</h2>
            <img src={queen.image_url} alt={queen.name} class="queen-picture" />
            <h3>{queen.quote}</h3>
        </div>
    )
}

export default QueenProfile;
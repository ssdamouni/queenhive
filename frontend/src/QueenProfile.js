import { useParams } from "react-router-dom";
import axios from "axios";

import React from "react";

const QueenProfile = ({queens}) =>{
    const { id } = useParams();
    if(!queens){
        async function getQueens(){
            let res = await axios.get('http://www.nokeynoshade.party/api/queens/all');
            queens = res.data
        }
        getQueens();
    }
    let queen = queens.find(o => o.id === id);
    console.log(queen)
    if (!queen){
        return <h2>loading...</h2>
    }
    return(
        <div>
            <h2 key={queen.id}>{queen.name}</h2>
            <img src={queen.image_url} alt={queen.name} class="queen-picture" />
            <h3>{queen.quote}</h3>
        </div>
    )
}

export default QueenProfile;
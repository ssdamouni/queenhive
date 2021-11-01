import { useParams } from "react-router-dom";
import axios from "axios";

import React from "react";

const QueenProfile = ({queens}) =>{
    const { id } = useParams();
    let queenList = queens;
    if(!queenList){
        async function getQueens(){
            let res = await axios.get('http://www.nokeynoshade.party/api/queens/all');
            return res.data
        }
       queenList = getQueens();
    }
    let queen = queenList.find(o => o.id === parseInt(id));
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
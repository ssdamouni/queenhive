import React from "react";
import { Link } from 'react-router-dom';

const QueenList = ({ queens }) =>{
    return(
        <div>
            <h2>Queens</h2>
            {queens.map(queen => (
                <Link to={`/queens/${queen.id}`} key={queen.id}>
                    <li key={queen.id}>{queen.name}</li>
                </Link>
            ))}
        </div>
    )
}

export default QueenList;
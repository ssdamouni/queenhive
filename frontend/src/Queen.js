import React from "react";

const Queen = ({ queen }) =>{
    return(
        <div>
            <h2 key={queen.id}><a href={`/queens/${queen.id}`}>{queen.name}</a></h2>
            <h3>{queen.quote}</h3>
        </div>
    )
}

export default Queen;
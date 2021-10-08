import React from 'react';
// import { Link } from 'react-router-dom';

const Read = ({ message }) =>{
    return(
        <div>
            <h3>{message["message"]}, k thanks: {message["username"]}</h3>
        </div>
    )
}

export default Read;
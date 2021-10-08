import React from "react";
import Read from "./Read";

const ReadList = ({ messages }) =>{
    return(
        <div>
            <h2>Spill the Tea!!!</h2>
            {messages.map(message => (
                <Read message={message} />
            ))}
        </div>
    )
}

export default ReadList;
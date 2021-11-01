import React from "react";
import Read from "./Read";
import { Col } from "react-bootstrap";
import "./ReadList.css"

const ReadList = ({ messages }) =>{
    return(
        <div>
            <a href="/messages/add">Add a message</a>
            <h2>Spill the Tea!!!</h2>
            <Col xs={6} className="center">
                {messages.map(message => (
                    <Read message={message} />
                ))}
            </Col>
        </div>
    )
}

export default ReadList;
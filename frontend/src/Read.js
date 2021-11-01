import React from 'react';
import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom';

const Read = ({ message }) =>{
    return(
        <div>
            <Card className="border border-dark">
                <Card.Body>
                    <Card.Text>{message["message"]}</Card.Text>
                    <footer className="blockquote-footer">k thanks: {message["username"]}</footer>
                </Card.Body>
            </Card>
            <h3></h3>
        </div>
    )
}

export default Read;
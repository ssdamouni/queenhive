import React from "react";
import './QueenList.css'
import {ListGroup, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const QueenList = ({ queens }) =>{
    return(
        <div>
            <h2>Queens</h2>
            <Col xs={6} className="center">
                <ListGroup>
                    {queens.map(queen => (
                        <ListGroup.Item>
                        <Link  id="queen-list" to={`/queens/${queen.id}`} key={queen.id}>
                            <li key={queen.id}>{queen.name}</li>
                        </Link>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </div>
    )
}

export default QueenList;
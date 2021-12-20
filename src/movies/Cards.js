import React from 'react'
import {Card, ListGroupItem, ListGroup, } from "react-bootstrap"

const Cards = ({el}) => {



    return (
        <div>
                  

            <Card style={{ width: '18rem' , }}>
            <ListGroup className="list-group-flush">
                    <ListGroupItem> {el.id} </ListGroupItem>
                </ListGroup>
                <Card.Img variant="top" src={el.posterUrl} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem> {el.rate}  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Title   > {el.title}  </Card.Title>
                    <Card.Text   style={{fontFamily:"inherit", }} >
                       {el.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> {el.trailer}  </ListGroupItem>
                </ListGroup>
                
            </Card>
</div>
     
    )
}

export default Cards

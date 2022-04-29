import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const UserCard = ({image, userName, url}) => {
  
  return (
    <Col md={3}>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
              <Card.Body>
                  <Card.Title><a href={url} target="_blank">{userName}</a></Card.Title>      
               </Card.Body>
               </Card>
         </Col>
  )
}

export default UserCard
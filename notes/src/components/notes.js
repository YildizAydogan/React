import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Note from './note';

const Notes = ({data}) => {
    console.log(data);
  return (
   <Container>
       <Row className="g-5">
           {
           
            data.map((item) =>(    
               <Col md={4} key={item.id}>
                  <Note/>
               </Col>  
         
                
                ))
           }
         


       </Row>
   </Container>
  )
}

export default Notes
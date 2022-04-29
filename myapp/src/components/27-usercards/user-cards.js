import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'

const UserCards = () => {
   const [users, setUsers]=useState([]);

   fetch("https://api.github.com/users")
   .then(resp=>resp.json())
    .then(data=> {
      console.log(data);
    });



  return (
    <Container>
       <Row>
        
       </Row>
    </Container>
 




  )
}

export default UserCards
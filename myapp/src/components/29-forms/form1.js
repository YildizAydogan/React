import React, { useState } from 'react'
import {Container, Form} from "react-bootstrap";
const Form1 = () => {
 const [name, setName] = useState("");
 
 const handleName= (e) => {

 setName(e.target.value);

 }









  return (
      <Container className="mt-5">
          <div>Merhaba {name}</div>
    <Form>
        <Form.Control type="text" 
        value={name} 
        onChange={handleName}
        placeholder="Adinizi giriniz"/>
    </Form>
 </Container> )
}
export default Form1
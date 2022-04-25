import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './product'
import data from "../../assets/data/products.json"

const Products = () => {
  return (
    <Container className="my-5">
        <Row className="g-3">
            {data.map((item) => {
             const {id, image, title, desc, price} = item;

               return (
            <Col md={3} key={id}>
            <Product title={title} desc={desc} price={price} image={image}/>
            </Col>

               ) 
            })}
       
       </Row> 
     </Container>
  )
}

export default Products
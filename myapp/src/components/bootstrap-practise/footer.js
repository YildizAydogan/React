import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

const Footera = () => {
  return (

    <Container fluid style={{backgroundColor: 'black',color:'white'}}>
        <Row>
            <Col md={4}>
                <h2>Hakkimizda</h2>
                <p>Lorem sdfsdfsfsd sfsdfsdfsdf sdfsdfsdfsdf</p>
            </Col>
            <Col md={4}>
                  <ul>
                      <li>Link-1</li>
                      <li style={{color:'white'}}>Link-2</li>
                      <li>Link-3</li>
                      <li>Link-4</li>
                  </ul>
            </Col>
            <Col md={4}>
            <ul>
                      <li>Link-1</li>
                      <li style={{color:'white'}}>Link-2</li>
                      <li>Link-3</li>
                      <li>Link-4</li>
                  </ul>
            </Col>
        </Row>
    </Container>

  )
}
export default Footera
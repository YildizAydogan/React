import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
const Person = ({ name, age, image }) => {
  return (
      <Table style={{width: '50%'}}>
    <Card className="d-flex">
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={require(`../../assets/img/people/photo-01.jpg`)}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    <Card className="d-flex">
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={require(`../../assets/img/people/photo-01.jpg`)}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    <Card className="d-flex">
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={require(`../../assets/img/people/photo-01.jpg`)}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    <Card className="d-flex">
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={require(`../../assets/img/people/photo-01.jpg`)}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    <Card className="d-flex">
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={require(`../../assets/img/people/photo-01.jpg`)}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    <Card className="d-flex">
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={require(`../../assets/img/people/photo-01.jpg`)}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>

    </Table>
  );
};
export default Person;

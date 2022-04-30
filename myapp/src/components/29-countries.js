import React, { useState, useEffect } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import Country from "./29-country";

const Countries1 = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios("https://restcountries.com/v3.1/all").then((resp) => {
        setCountries(resp.data);
        setLoading(false);
      });
    }, 5000);
  }, []);

  return (
    <Container className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Bayrak</th>
            <th>Ãœlke</th>
            <th>NÃ¼fus</th>
            <th>BaÅŸkent</th>
          </tr>
        </thead>
        <tbody>
          <tr className={loading ? "d-block" : "d-none"}>
            <td colSpan={5}>
              <Spinner animation="border" size="sm" /> Loading...
            </td>
          </tr>

          {countries.map((country, index) => (
            <Country key={index} data={country} index={index} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries1;

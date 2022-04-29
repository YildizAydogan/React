import React, { useEffect, useState } from 'react'
import { Container, Spinner, Table } from 'react-bootstrap'
import axios from 'axios'
import Country from './country';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://restcountries.com/v3.1/all")
        .then(resp=> {
            console.log(resp);
            setCountries(resp.data);
            setLoading(false);
        });
    }, []);

  return (

    <Container className="mt-5">
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Bayrak</th>
        <th>Ulke</th>
        <th>Nufus</th>
        <th>Baskent</th>
      </tr>
    </thead>
    <tbody> 
         <div className={loading ? "d-block" : "d-none"}>
              <Spinner animating="border" size="sm" />Loading...</div> 
        {
        countries.map((country, index)=> <Country key={index} data={country} index={index}/>)
        }
   

        </tbody>
  </Table>
  
  </Container>
  )
}

export default Countries
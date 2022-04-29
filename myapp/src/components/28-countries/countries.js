import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios'


const Countries = () => {
    const [countries, setCountries] =useState([]);
    const [loading, setLoading] = useState(true);
     useEffect( ()=> {
     axios("https://restcountries.com/v3.1/all")
     .then(resp=> {
     console.log(resp);

     })

      },[]);

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
   
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
        <td></td>
      </tr>
    </tbody>
  </Table>
  
  </Container>
  )
}

export default Countries
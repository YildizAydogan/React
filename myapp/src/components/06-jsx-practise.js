import React from 'react';
import countries from "../assets/data/countries.json";

const JsxPractise = () => {
  return (
    <>

    <h2>Select a country</h2>
    <select>
      <option disabled selected>Select a country</option>
      {
      countries.map((item, index)=> <option key={index} value={item.code}>{item.name}</option>)
      }
    </select>
    
    <h2>Countries &amp; Codes</h2>

    <table>
        <thead>
        <tr><th>Ülke Adi</th><th>Ülke Kodu</th></tr>
        </thead>
        <tbody>
        {
          countries.map( (country, index) => {
            return (
              
                <tr key={index}>
                  <td>{country.name}</td>
                  <td>{country.code}</td>
                </tr>
              
            )
          
          } )
        }
        </tbody>
    </table>


    <h2>Countries</h2>
    <ul>
      {
        countries.map( (country, index) => <li key={index}>{country.name}</li> )
      }
    </ul>


  
      


    </>
  )
}

export default JsxPractise
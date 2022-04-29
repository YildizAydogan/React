import React from 'react'

const Country = ({data, index}) => {

 // const {name, capital, flags, population, index} =data;

   


  return (
  <>
    <tr>
     <td>{index}</td>
     <td><img className="square rounded-circle" src={data.flags.png} width="100"></img> </td>
     <td>{data.name.common}</td>
     <td>{data.population}</td>
    <td>{data.capital}</td>  
  </tr>

</> 
 )
}

export default Country
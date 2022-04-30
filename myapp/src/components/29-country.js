import React from "react";

const Country = ({index, data}) => {
    const {flags, name, population, capital} = data;

  return (
    <tr>
      <td>{index+1}</td>
      <td><img src={flags.png} className="img-fluid" width="100"/></td>
      <td>{name.common}</td>
      <td>{population}</td>
      <td>{capital}</td>
    </tr>
  );
};

export default Country;
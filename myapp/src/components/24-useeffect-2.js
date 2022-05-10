import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'









const UseEffect3 = () => {

   const[ counter, setCounter ] = useState(0);
   const [status, setStatus ] = useState("pending");


const artir = () => {
   setCounter(counter + 1);

}; 

     useEffect( ()=> {

     document.title=counter+ Math.random;

     },[counter]);



    return (
    <div className="text-center">
      <div>{counter}</div>
      <Button variant="warning" onClick =  {artir} >Tikla</Button>
      <Button variant="success" onClick = {()=> setStatus("done")}>Status </Button>





    </div>
  )
}

export default UseEffect3
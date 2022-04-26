import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const Counter = () => {

   const [count, setCount] = useState(15);
/* 
const test = (isim) => { 
    alert(isim);
 }

 onClick={test("Ali")}>
 baslangicta calismasin diye asagida setcount i arrow lu yazdik
 */
 const handleCount = (cnt) => {
    if (cnt<0 || cnt>100) return;
    setCount(cnt);
}




  return (

    <ButtonGroup aria-label="Basic example" >
    <Button variant="success" onClick={()=>handleCount(count+1)}>+</Button>
    <Button variant="light">{count}</Button>
    <Button variant="warning"onClick={()=>handleCount(count-1)}>-</Button>
    <Button variant="info" onClick ={()=>handleCount(0)}>Reset</Button>
  </ButtonGroup>

  )
}

export default Counter
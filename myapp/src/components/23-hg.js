import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';


const Hg = () => {


    const [count, setCount] = useState();
    const handleCount = (cnt) => {
        if (cnt<0 || cnt>100) return;
        setCount(cnt);
    }




  return (
  <>

      <ProgressBar>
      <ProgressBar striped variant="success" now={35} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
      </ProgressBar>

    <ButtonGroup aria-label="Basic example" >
    <Button variant="success" onClick={()=>handleCount(count+1)}>+</Button>
    <Button variant="warning"onClick={()=>handleCount(count-1)}>-</Button>
    </ButtonGroup>



</>
  )
}





export default Hg
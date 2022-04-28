import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';

const UseEffect1 = () => {
    const [message, setMessage] = useState("");

    console.log("Bu satir her state güncellemesinde çalişir.")

    useEffect( ()=> {
        console.log("Bu satir sadece componnet ilk yüklendiğinde çalişir.")
    },[]);

  return (
    <div>
        {message}

        <Button variant="success" onClick={()=>setMessage("Hello")}>Merhaba</Button>
    </div>

  )
}

export default UseEffect1
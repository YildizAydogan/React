import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';

const UseEffect = () => {
    const [message, setMessage] = useState("");

    console.log("Bu satır her state güncellemesinde çalışır.")

    useEffect( ()=> {
        console.log("Bu satır sadece componnet ilk yüklendiğinde çalışır.")
    },[]);

  return (
    <div>
        {message}

        <Button variant="success" onClick={()=>setMessage("Hello")}>Merhaba</Button>
    </div>

  )
}

export default UseEffect
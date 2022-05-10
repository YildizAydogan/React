import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';


const UseEffect2 = () => {
    const [message, setMessage] = useState("");
    const [test, setTest] = useState("");

    console.log("1-Bu satır her state güncellemesinde çalışır.")

    useEffect( ()=> {
        console.log("2-Bu satır sadece componnet ilk yüklendiğinde çalışır.")

        return()=>{
            console.log("4-Bu satır component unmount olduğunda çalışır.")
        }

    },[]);

    useEffect( ()=>{
        console.log("3-Bu satır message isimli state güncellendiğinde çalışır.")
    }, [message]);


  return (
    <div>
        {message}

        <Button variant="success" onClick={()=>setMessage("Hello")}>Merhaba</Button>
        <Button variant="danger" onClick={()=>setTest("Hello")}>Test</Button>
    </div>

  )
}

export default UseEffect2
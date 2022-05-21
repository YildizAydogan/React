import React from 'react'
import { Spinner } from 'react-bootstrap'
import logo from "../../../assets/img/logo/logo.png";
const Loading = () => {
  return (
    <div className="loading-page">
        <Spinner animation="border"/>
        <img src={logo}/>
    </div>
  )
}
export default Loading
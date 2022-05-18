import React from 'react'
import { Button } from 'react-bootstrap'
import "./bookbar.css"
import { Link } from 'react-router-dom';
const BookBar = () => {
  return  (
    <div className="bookbar">
<h3>Explore our cars and book now</h3>
<div><Button variant="secondary" as={Link} to="/vehicles">BOOK NOW</Button></div>
    </div> 
  )
}

export default BookBar
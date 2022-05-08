import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
   <ul>
         <li><Link to="/hello-world">Hello World</Link></li>
          <li><Link to="/comp">Comp</Link></li>
          <li><Link to="/jsx">Jsx</Link></li>
          <li><Link to="/jsx2">Jsx2</Link></li>
          <li><Link to="/jsx-loop">Jsx Loop</Link></li>
          <li><Link to="/jsx-practise">Jsx Practise</Link></li>
   </ul>


  )
}

export default Menu
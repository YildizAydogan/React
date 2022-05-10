import React, { useContext } from 'react'
import { StoreContext } from '../store'

const GetContext = () => {
  const context = useContext(StoreContext);

  return (
    <div style={{color: context.color}}>
        <h2>Bu renk merkezi state üzerinden geliyor</h2>
    </div>
    
  )
}

export default GetContext
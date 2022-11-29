import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Order-Submit</h1>
      <button onClick={()=>{navigate('/')}}>Go back</button>
    </div>
  )
}

export default OrderSummary

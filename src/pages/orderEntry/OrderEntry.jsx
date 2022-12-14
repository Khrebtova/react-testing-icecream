import React from 'react'
import Options from './Options'

const OrderEntry = () => {
  return (
    <div>
        <h1>Your Order :</h1>
        <Options optionType="scoops" />
        <Options optionType="toppings" />
    </div>
  )
}

export default OrderEntry
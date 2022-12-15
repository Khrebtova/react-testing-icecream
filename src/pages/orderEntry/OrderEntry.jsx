import React from 'react'
import Options from './Options'
import { useOrderDetails } from '../../context/OrderDetails'
import { formatCurrency } from '../../utilities/index'

const OrderEntry = () => {
  const { totals } = useOrderDetails()
  return (
    <div>
        <h1>Design your sundae</h1>
        <Options optionType="scoops" />
        <Options optionType="toppings" />
        <h2>Grand total: {formatCurrency(totals.grandTotal)}</h2>
    </div>
  )
}

export default OrderEntry
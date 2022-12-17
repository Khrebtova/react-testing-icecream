import React from "react";
import { Button } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";

const OrderConfirmation = ({ goToNextPhase, orderNumber, setOrderNumber }) => {
  const { resetOrder } = useOrderDetails();
  
  const handleCreateNewOrder = () => {
    resetOrder();
    setOrderNumber(null);
    goToNextPhase();
  };

  if(!orderNumber) return <h3>Loading...</h3>;

  return (
    <div>
      <h1>Thank you!</h1>
      <h3>Order number: {orderNumber}</h3>      
      <Button onClick={handleCreateNewOrder}>Create new order</Button>
    </div>
  );
};

export default OrderConfirmation;

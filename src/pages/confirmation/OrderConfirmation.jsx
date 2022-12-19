import React from "react";
import { Button } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";
import AlertBanner from "../common/AlertBanner";

const OrderConfirmation = ({ goToNextPhase, orderNumber, setOrderNumber, orderError }) => {
  const { resetOrder } = useOrderDetails();
  
  const handleCreateNewOrder = () => {
    resetOrder();
    setOrderNumber(null);
    goToNextPhase();
  };

  const newOrderButton = (
    <Button onClick={handleCreateNewOrder}>Create new order</Button>
  )

  if(orderError) {
    return (
      <>
        <AlertBanner message={null} variant={null}/>
        {newOrderButton}
      </>
    );
  }

  if(!orderNumber) return <h3>Loading...</h3>;

  return (
    <div>
      <h1>Thank you!</h1>
      <h3>Order number: {orderNumber}</h3>      
      {newOrderButton}
    </div>
  );
};

export default OrderConfirmation;

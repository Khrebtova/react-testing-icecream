import React from "react";
import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../context/OrderDetails";
import { formatCurrency } from "../../utilities";

const OrderSummary = ({ goToNextPhase, setOrderNumber, setOrderError }) => {
  const { totals, orderDetails } = useOrderDetails();

  const scoopsArray = Object.entries(orderDetails.scoops);
  const scoopsList = scoopsArray.map(([name, count]) => (
    <li key={name}>
      {name} x {count}
    </li>
  ));

  const toppingsArray = Object.keys(orderDetails.toppings);
 
  const toppingsList = toppingsArray.map((name) => <li key={name}>{name}</li>);

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops : {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopsList}</ul>
      { toppingsArray.length > 0 ? <h2>Toppings : {formatCurrency(totals.toppings)}</h2> : null}
      {/* <h2>Toppings : {formatCurrency(totals.toppings)}</h2> */}
      <ul>{toppingsList}</ul>
      <h2>Grand Total : {formatCurrency(totals.grandTotal)}</h2>
      <SummaryForm
        goToNextPhase={goToNextPhase}
        setOrderNumber={setOrderNumber}
        setOrderError={setOrderError}
      />
    </div>
  );
};

export default OrderSummary;

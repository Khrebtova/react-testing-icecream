import React from "react";
import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../context/OrderDetails";
import { formatCurrency } from "../../utilities";

const OrderSummary = () => {
  const { totals, orderDetails } = useOrderDetails();

  const scoopsArray = Object.entries(orderDetails.scoops);
  const scoopsList = scoopsArray.map(([name, count]) => (
    <li key={name}>
      {name} x {count}
    </li>
  ));

  const toppingsArray = Object.entries(orderDetails.toppings);
  const toppingsList = toppingsArray.map((name) => <li key={name}>{name}</li>);

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops : {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopsList}</ul>
      <h2>Toppings : {formatCurrency(totals.toppings)}</h2>
      <ul>{toppingsList}</ul>
      <h2>Grand Total : {formatCurrency(totals.grandTotal)}</h2>
      <SummaryForm />
    </div>
  );
};

export default OrderSummary;

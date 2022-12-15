import { React, useState, createContext, useContext } from "react";
import { pricePerItem } from "../constants/index";

const OrderDetails = createContext();

//create custom hook to check whether we're inside a provider
export const useOrderDetails = () => {
  const context = useContext(OrderDetails);
  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }
  return context;
};

//create provider
export const OrderDetailsProvider = (props) => {
    //state to hold order details
    const [orderDetails, setOrderDetails] = useState({
        scoops: {}, //{Vanilla: 1, Chocolate: 2}
        toppings: {}, // {Cherries: 1, M&Ms: 2}
    });

    const updateOrderDetails = (itemName, newItemCount, optionType) => {
        const newOrderDetails = { ...orderDetails }; //copy of orderDetails

        //update option count for this item with the new value
        newOrderDetails[optionType][itemName] = newItemCount;

        //update order details with new option counts
        setOrderDetails(newOrderDetails);
    };

    const resetOrder = () => {
        setOrderDetails({
        scoops: {},
        toppings: {},
        });
    };

    //utility function to calculate totals
    const calculateSubtotal = (optionType) => {
        //get an array of the option counts
        const countsArray = Object.values(orderDetails[optionType]);
        //reduce the array to a single value
        const total =
        countsArray.reduce((total, value) => total + value, 0) *
        pricePerItem[optionType];
        //return the total
        return total;
    };

    //calculate totals
    const totals = {
        scoops: calculateSubtotal("scoops"),
        toppings: calculateSubtotal("toppings"),
        grandTotal: calculateSubtotal("scoops") + calculateSubtotal("toppings"),
    }

  const value = { orderDetails, updateOrderDetails, resetOrder, totals };

  return (
    <OrderDetails.Provider value={value}>
      {props.children}
    </OrderDetails.Provider>
  );
};

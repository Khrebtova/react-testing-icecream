import { React, useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import Row from "react-bootstrap/Row";
import AlertBanner from "../common/AlertBanner";
import { pricePerItem } from "../../constants/index";
import { formatCurrency } from "../../utilities/index";
import { useOrderDetails } from "../../context/OrderDetails";


const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const {totals} = useOrderDetails();

  useEffect(() => {
    //optionType is either 'scoops' or 'toppings'
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        setError(true);
      });
  }, [optionType])
 
  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
  const price = formatCurrency(pricePerItem[optionType]);
  const total = formatCurrency(totals[optionType]);
  const renderItems = items.map((item) => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />)
  
  if (error) {  
    return <AlertBanner />;  
  }

  return (
    <>
      <h2>{title}</h2>
      <p>{price} each</p>
      <p>{title} total: {total}</p>
      <Row>
        {renderItems}
      </Row>
      
    </>
  ); 
};

export default Options;

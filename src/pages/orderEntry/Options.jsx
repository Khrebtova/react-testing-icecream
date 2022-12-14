import { React, useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import Row from "react-bootstrap/Row";
import AlertBanner from "../common/AlertBanner";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

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

  const renderItems = items.map((item) => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />)
  
  if (error) {  
    return <AlertBanner />;  
  }

  return (
    <Row>
      {renderItems}
    </Row>
  ); 
};

export default Options;

import { React, useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import Row from "react-bootstrap/Row";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //optionType is either 'scoops' or 'toppings'
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [optionType])
 
  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  const renderItems = items.map((item) => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />)

  return (
    <Row>
      {renderItems}
    </Row>
  );
};

export default Options;

import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useOrderDetails } from "../../context/OrderDetails";

const ScoopOption = ({ name, imagePath }) => {
  const [isValid, setIsValid] = useState(true);
  const { updateOrderDetails, orderDetails } = useOrderDetails();

  const handleChange = (event) => {
    const currentValue = event.target.value;
    const currentValueFloat = parseFloat(currentValue);
    const valueIsValid =
      currentValueFloat >= 0 &&
      currentValueFloat <= 10 &&
      Math.floor(currentValueFloat) === currentValueFloat;
    
    setIsValid(valueIsValid);
    
    const finalValue = valueIsValid ? parseInt(currentValue) : 0;
    
    if (valueIsValid) {
      updateOrderDetails(name, finalValue, "scoops");
    }
  };

  return (
    <Col sx={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
        style={{ width: "75%" }}
      />
      <p>{name}</p>
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            min={0}
            onChange={handleChange}
            isInvalid={!isValid}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOption;

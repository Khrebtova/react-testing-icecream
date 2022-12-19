import axios from "axios";
import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const SummaryForm = ({ goToNextPhase, setOrderNumber, setOrderError }) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      No ice cream will actually be delivered
    </Tooltip>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    axios     
      .post(`http://localhost:3030/order`)
      .then((response) => {
        setOrderNumber(response.data.orderNumber);
      })
      .catch((error) => {
        setOrderError(true);
      });
    goToNextPhase();
  };

  
  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={renderTooltip}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={checkboxChecked}
          onChange={(e) => setCheckboxChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={!checkboxChecked}
        onClick={handleSubmit}
      >
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;

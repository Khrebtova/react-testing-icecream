import React , { useState } from "react";
import { Button, Form } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const SummaryForm = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} >
        No ice cream will actually be delivered
    </Tooltip>
  );

    const checkboxLabel = (
        <span>
            I agree to 
            <OverlayTrigger placement="right" overlay={renderTooltip}>
                <span style={{ color: "blue" }}>Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    )


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
        <Button variant='primary' type="submit" disabled={!checkboxChecked}>
            Confirm Order
        </Button>      
    </Form>
  );
};

export default SummaryForm;

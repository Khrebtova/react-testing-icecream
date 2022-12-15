import  { React, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useOrderDetails } from '../../context/OrderDetails'

const ToppingOption = ({name, imagePath}) => {
  const [checked, setChecked] = useState(false) 
  const { updateOrderDetails } = useOrderDetails()
  
  const handleChange = (event) => {
    setChecked(event.target.checked)
    updateOrderDetails(name, event.target.checked ? 1 : 0, 'toppings')
  }
  return (
    <Col sx={12} sm={6} md={4} lg={3} style={{textAlign: 'center'}}>
      <img 
        src={`http://localhost:3030/${imagePath}`} 
        alt={`${name} topping`}
        style={{width: '75%'}} 
      />
      <Form.Group controlId={`${name}-topping-checkbox`} style={{marginTop: '10px', marginBottom: '10px'}} >
        <Form.Check type='checkbox' label={name} checked={checked} onChange={handleChange} />             
      </Form.Group>  
    </Col>
  )
}

export default ToppingOption
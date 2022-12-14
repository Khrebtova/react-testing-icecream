import React from 'react'
import Col from 'react-bootstrap/Col'

const ToppingOption = ({name, imagePath}) => {
  return (
    <Col sx={12} sm={6} md={4} ld={3} style={{textAlign: 'center'}}>
      <img 
        src={`http://localhost:3030/${imagePath}`} 
        alt={`${name} topping`}
        style={{width: '75%'}} 
      />
      <p>{name}</p>
      <input type="checkbox" />      
    </Col>
  )
}

export default ToppingOption
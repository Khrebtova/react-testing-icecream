import React from 'react'
import Col from 'react-bootstrap/Col'

const ScoopOption = ({name, imagePath}) => {
  return (
    <Col sx={12} sm={6} md={4} ld={3} style={{textAlign: 'center'}}>
      <img 
        src={`http://localhost:3030/${imagePath}`} 
        alt={`${name} scoop`}
        style={{width: '75%'}} 
      />
      <p>{name}</p>      
    </Col>
  )
}

export default ScoopOption
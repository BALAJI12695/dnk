import React from 'react'
import '../Section3/FeaturedProduct.css'
import { Col, Container, Row  } from 'react-bootstrap'
import { Columns } from 'react-bootstrap'

export const FeaturedProduct = () => {
  return (
    <Container fluid className='h' >
        <h1>hello world</h1>
        <div className="featuredproduct">
            <div className="line">
                
                    <Row>
                    <Col className='col-6' >hi</Col>
                    <Col className='col-6' >hello</Col>
                        
                    </Row>
                
            </div>
        </div>

    </Container >
  )
}

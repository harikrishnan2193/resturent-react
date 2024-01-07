import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restraurent}) {
  return (
    <>
    <Link to={`/resturent_view/${restraurent.id}`} style={{textDecorationLine:'none'}}>
        <div>
          <Card style={{ width: '80%' }}  className='bg bg-dark ms-5'>
          <Card.Img variant="top" src={restraurent.photograph} style={{ height:'450px'}} />
          <Card.Body>
            <Card.Title className='text-center text-warning p-2'>{restraurent.name}</Card.Title>
            <hr />
            <Row>
                <Col className='ms-3'>
                    <Card.Text>
                        {restraurent.neighborhood}
                      </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        Cusin Type:{restraurent.cuisine_type}
                      </Card.Text>
                </Col>
            </Row>
            
          </Card.Body>
        </Card>
        </div>
    </Link>
  </>
  )
}

export default RestCard
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



function RestView() {
  const [show, setShow] = useState(false);

  const {id} = useParams()
  console.log(id);

  const allrestaurent = useSelector((state)=>state.restaurentSlice.allrestaurent)
  console.log(allrestaurent);
  const selectedRestaurent = allrestaurent.find(item=>item.id==id)
  console.log(selectedRestaurent);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Row>
        <Col md={1}></Col>
        <Col md={3}>
          <img className='rounded mt-5' width={'100%'} height={'600px'} src={selectedRestaurent.photograph} alt="no image" />
        </Col>
        <Col md={7} className='px-3'>
          <hr />
        <h4 className='text-center'><span className='text-warning'>RESTAURENT</span> DETAILS</h4>
        <hr />
    <ListGroup>
      <ListGroup.Item className='p-4 text-center'><h4>{selectedRestaurent.name}</h4></ListGroup.Item>
      <ListGroup.Item>Neighborhood:{selectedRestaurent.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisin_Type:{selectedRestaurent.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address:{selectedRestaurent.address}</ListGroup.Item>

      <ListGroup.Item >
        <div>
          <button className='btn btn-warning me-5' onClick={handleShow}>Operating Hours</button>
          <RestReview review ={selectedRestaurent.reviews}/>
        </div>
      </ListGroup.Item>
      

        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <ListGroup>
      <ListGroup.Item>Monday:{selectedRestaurent.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday {selectedRestaurent.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Wednesday {selectedRestaurent.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Thurseday {selectedRestaurent.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Friday {selectedRestaurent.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Saturday {selectedRestaurent.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Sunday {selectedRestaurent.operating_hours.Monday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        
      </Modal>
      
      

      
    </ListGroup>
    <hr />
        </Col>
        <Col md={1}></Col>
      </Row>
    </>
  )
}

export default RestView
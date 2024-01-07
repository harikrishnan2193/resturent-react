import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurent } from '../redux/restaurentSlice'

function Home() {
  //accessing state inorder to display content
  const allrestaurent = useSelector((state)=> state.restaurentSlice.allrestaurent)
  console.log(allrestaurent);

  const dispatch = useDispatch()

  useEffect(()=>{
    //called thunk function
    dispatch(fetchRestaurent())
  },[])

  return (
    <Row>
      {allrestaurent.length>0?
      allrestaurent.map((restraurent)=>(
      <Col sm={6} md={4} className='p-4'>
      <RestCard restraurent={restraurent}/>
    </Col>
    ))
      :<p className='text-danger fs-4' >Nothing to display</p>}
      
    </Row>
  )
}

export default Home
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurentSlice';
import { Link } from 'react-router-dom';


function Header() {
  const dispatch = useDispatch()
  return (
    <div>
        <Navbar className='p-3'>
        <Container>
          <Navbar.Brand href="#home" className='d-flex'>
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/006/018/410/original/food-logo-simple-black-circle-rustic-illustration-for-eating-time-reminder-icon-design-free-vector.jpg"
              width="55"
              height="55"
              className="d-inline-block align-top"
            />{' '}
            
              <Link to={'/'}  style={{textDecoration:'none'}}><h4 className='mt-3 ms-4'><span className='text-warning'>Food</span> Circle</h4></Link>  
          </Navbar.Brand>
          <input onChange={(e)=>dispatch(search(e.target.value))} className='form-control w-25 mt-2' type="text" placeholder='Enter the neighborhood' />

        </Container>
      </Navbar>
    </div>
  )
}

export default Header
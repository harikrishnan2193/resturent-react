import React from 'react'
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function RestReview(props) {

  const [open, setOpen] = useState(false);

  const view = props.review
  console.log(view);
  
  return (
    <>
        <button onClick={() => setOpen(!open)} className='btn btn-warning justify-content-center'>Click hear view the review</button>

        <Collapse in={open}>
          <div>
            {
            view.map((item)=>(
            <>
              <hr />
              <h6>{item.name} : {item.date}</h6>
              <p>Rating: {item.rating}</p>
              <p>{item.comments}</p>
            </>
            
            ))
            }
          </div>
        </Collapse>
    </>
  )
}

export default RestReview
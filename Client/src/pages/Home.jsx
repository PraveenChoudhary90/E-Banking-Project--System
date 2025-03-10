import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>

         <div id="myform">  
            <h3>User Account Login</h3>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <h5>If You Dont't have Account <button style={{borderRadius:"30px"}}><Link  to="/registration" style={{textDecoration:"none"}} >Click Here Open Account</Link> </button></h5>
    </Form>
   </div>
    
    </>
  )
}

export default Home

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'

function Registration() {
  return (
    <>
             <div id="myformdata"> 
         <h3>  Open Your New Account </h3>
            <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter first Name</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswords">
            <Form.Label> Enter Last Name </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Enter Email </Form.Label>
            <Form.Control type="email" />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordq">
            <Form.Label> Enter City </Form.Label>
            <Form.Control type="text" />
          </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPasswordc">
            <Form.Label> Enter Mobile Number </Form.Label>
            <Form.Control type="text" />
          </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassworda">
            <Form.Label> Enter Full Address </Form.Label>
            <Form.Control type="text" />
          </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPasswordn">
            <Form.Label> Enter Pin Code </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordk">
            <Form.Label> Enter State Name </Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
       </div>
    </>
  )
}

export default Registration
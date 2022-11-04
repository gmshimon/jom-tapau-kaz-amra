import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Registration.css'
const Registration = () => {
  return (
    <div className="d-lg-flex body-reg   registration-div">
      <section className=" w-lg-50">
     
          <img className=" w-100 h-100" src="https://i.ibb.co/Dg3F3FV/IMG-9325.jpg" alt="" />
      </section>


 <section className=" w-75 mx-auto px-lg-5  ">
        <Form className="w-100 ">
          <h1 className="mt-5 text-light text-center mb-5">Please Register</h1>
          <Form.Group className="mb-3 w-75 mx-auto " >
            <Form.Label className=''>Phone Number</Form.Label>
            <Form.Control  type="phone" placeholder="Phone Number" />
           
          </Form.Group>
          <Form.Group className="mb-3 w-75 mx-auto " >
            <Form.Label>Name</Form.Label>
            <Form.Control  type="name" placeholder="Enter FullName" />
            <Form.Text className="text-muted">
             
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 w-75 mx-auto " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control  type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
        
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 w-75 mx-auto " controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        
          <div className='d-flex  justify-content-center'>
          <Button className="mb-5" variant="danger" type="submit">
            Submit
          </Button>
          </div>


        </Form>
      </section>

    </div>
  )
}

export default Registration

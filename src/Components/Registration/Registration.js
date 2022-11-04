import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Registration.css";
const Registration = () => {
  return (
    <div className="d-lg-flex   registration-div">
      <section className=" w-lg-50">
     
          <img className=" w-100 h-100" src="https://i.ibb.co/DDDDhqG/IMG-9324.jpg" alt="" />
      </section>


 <section className=" w-75 mx-auto px-lg-5  ">
        <Form className="w-100 ">
          <h1 className="text-danger mt-5">Please Register</h1>
          <Form.Group className="mb-3 " >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control className="w-75" type="phone" placeholder="Phone Number" />
            <Form.Text className="text-muted">
            
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control className="w-75" type="name" placeholder="Enter FullName" />
            <Form.Text className="text-muted">
             
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="w-75" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
        
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="w-75" type="password" placeholder="Password" />
          </Form.Group>
        
          <Button className="mb-5" variant="primary" type="submit">
            Submit
          </Button>


        </Form>
      </section>

    </div>
  );
};

export default Registration;

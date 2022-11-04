import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Registration.css'
const Registration = () => {
  return (
    <div>
      <div className='d-lg-flex   registration-div'>
        <section className=' w-lg-50'>
          <img
            className='registration-img w-100 h-100'
            src='https://i.ibb.co/DDDDhqG/IMG-9324.jpg'
            alt=''
          />
        </section>

        <section className='  mx-auto d-flex align-items-center'>
          <Form className='w-100 '>
            <h1 className='text-danger mt-5'>Please Register</h1>
            <Form.Group className='mb-3 ' controlId='formBasicEmail'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type='phone' placeholder='Phone Number' />
              <Form.Text className='text-muted'></Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='name' placeholder='Enter FullName' />
              <Form.Text className='text-muted'></Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </section>
      </div>
    </div>
  )
}

export default Registration

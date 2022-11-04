import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './LoginForm.css'
const LoginForm = () => {
  return (
    <div className='login-container'>
      <Form>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <div style={{display:'flex',justifyContent:'center'}}>
          <Button className='login-button' variant='dark'>Primary</Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm

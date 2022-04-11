import React from 'react'
import {Button, Form} from 'react-bootstrap'

function Register() {
  return (
    <div className="center">
    <div className="form">
      <Form className="userlogin">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">Register</Button>
      </Form>
    </div>
    </div>
  )
}

export default Register
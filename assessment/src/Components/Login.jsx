import React from 'react'
import {Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styles/Login.css';

function Login() {
  return (
    <div className="center">
    <div className="form">
      <Form className="userlogin">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Password" />
        </Form.Group>
        
        <Link to="/Register">
          <Button className="mr-2" variant="primary" type="submit">Register</Button>
        </Link>
        <Button className="m-2" variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
    </div>
  )
}

export default Login

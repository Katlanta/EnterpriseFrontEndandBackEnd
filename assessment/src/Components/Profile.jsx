//Standard Imports!
import React from 'react'
import {Button,Form} from "react-bootstrap";
import axios from 'axios'
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

function Profile({user, setUser}) {
  const [email, setEmail] = useState()
  const navigate = useNavigate();  

  const handleEditEmail = async (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_API_URL+`users/setEmail`, {email: email}).then((res)=>{(console.log(res));});  
  }

  const handleDeleteAccount = async (e) =>{
    e.preventDefault();
    axios.delete(process.env.REACT_APP_API_URL+`users/delete`).then((res)=>{
      if (res.data)setUser(false); 
    });  
}
  return (
    (
    user
    ? <div>
          <h2>Name: {user.username}</h2>
          <h2>Do you want to delete your account?</h2>
          <Button className='m-1' onClick={handleDeleteAccount}>Delete</Button>
          <br/>
          <Form onSubmit={handleEditEmail}>
        <Form.Group controlId='formEmail' className='m-5'>
            <Form.Label>New Email</Form.Label>
            <Form.Control type='email' placeholder='Enter Email' required={true} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Button className='m-1' onClick={handleEditEmail}>
          Edit Email
      </Button>
        </Form>
        </div>
    : <h2>Please Login</h2>
    )
  )
}

export default Profile


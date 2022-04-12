//Standard Imports!
import React from 'react'
import {Button,Form} from "react-bootstrap";
import axios from 'axios'
import {useEffect, useState} from "react";

function Profile({user}) {
  const [email, setEmail] = useState()

  const handleOnSubmitName = async (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_API_URL+`users/setEmail`, {email: email}).then((res)=>{(console.log(res));});  
  }

  const handleDeleteAccount = async (e) =>{
    e.preventDefault();
    axios.delete(process.env.REACT_APP_API_URL+`users/delete`).then((res)=>{(console.log(res));});  
}
  return (
    <div>
      <h2>Name: {user.username}</h2>
      <h2>Do you want to delete your account?</h2>
      <Button className='m-1' onClick={handleDeleteAccount}>Delete</Button>
      <br/>
      <Form onSubmit={handleOnSubmitName}>
    <Form.Group className='' controlId='formEmail'>
        <Form.Label>New Email</Form.Label>
        <Form.Control type='email' placeholder='Enter Email' required={true} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
    </Form.Group>
    </Form>
    </div>
  )
}

export default Profile


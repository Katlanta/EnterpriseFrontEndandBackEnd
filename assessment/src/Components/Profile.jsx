//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Standard Imports!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React from 'react'
import {Button,Form} from "react-bootstrap";
import axios from 'axios'
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Profile function, parsing through user/setUser Handles API requests for deleting the account
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Profile({user, setUser}) {
  const [email, setEmail] = useState()
  const navigate = useNavigate();  
//This doesn't work???? I don't really know why honestly I tried
  const handleEditEmail = async (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_API_URL+`users/setEmail`, {email: email}).then((res)=>{(console.log(res));});  
  }
//Deleting the account!
  const handleDeleteAccount = async (e) =>{
    e.preventDefault();
    axios.delete(process.env.REACT_APP_API_URL+`users/delete`).then((res)=>{
      if (res.data)setUser(false); 
    });  
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    (
      //Conditionally rendering in the profile forms, if not logged in print please login!
    user
    ? <div>
          <h2>Name: {user.username}</h2>
          <h2>Do you want to delete your account?</h2>
          <Button className='m-1' onClick={handleDeleteAccount}>Delete</Button>
          <br/>
          <Form onSubmit={handleEditEmail}>
            {/*This doesnt work I don't get it...*/}
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


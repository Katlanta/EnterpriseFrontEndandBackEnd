import React from 'react' 
import { useState } from 'react';
import {Button} from "react-bootstrap";

function Profile() {
  return (
    <div><h2>Name:</h2>
    <h2>Do you want to delete your account?</h2>
    <Button type="submit">Delete</Button></div>
  )
}

export default Profile


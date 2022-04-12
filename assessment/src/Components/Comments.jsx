//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Standard Imports!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React from 'react'
import '../Styles/Comments.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import {Button,Form,Card} from 'react-bootstrap';
import dayjs from 'dayjs';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Declaring Constants 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Comments({user}) {
  const [comments, setComments] = useState([])
  const [postComment, setPostComment] = useState("")
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Use effect to get the API data
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  useEffect(() => {
    console.log(user)
    axios.get(process.env.REACT_APP_API_URL + `commentData/comments`)
    .then((res)=>{if (res.data.success) setComments(res.data.comments)});  
  }, []);

  const handlePostComment = (event) => {
    event.preventDefault();
    axios.post(process.env.REACT_APP_API_URL + `commentData/submit`, {text: postComment})
    .then((res)=>{if (res.data.success) setComments([...comments, res.data.comment])});  
  };

  const handleDelete = (comment) => {
    axios.delete(process.env.REACT_APP_API_URL + `commentData/comment`, {data: {commentId: comment._id}})
    .then((res)=>{if (res.data.success) {
      setComments(comments.filter(c => c._id !== comment._id));
    }});  
  };
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Form Layout/Allow user to comment!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <>
    {
      //Rendering conditionally to ensure only logged in users can comment
      user
      ? <><Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Comment</Form.Label>
    <Form.Control type="comment" placeholder="Enter New Comment" value={postComment} onChange={e => setPostComment(e.target.value)} />
  </Form.Group>
   <Button className='m-1' onClick={handlePostComment}>
      Post Comment
  </Button></>
    :null
    }
  
      {comments?.map((comment, index) => (
        <Card key={index} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{comment.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{dayjs(comment.date).format("HH:mm DD/MM/YY")}</Card.Subtitle>
          <Card.Text>
            {comment.text}
          </Card.Text>
          {/*Allows admins to delete all comments, and the user to delete their own comments*/}
          {
            user._id ===comment.userId || user.isAdmin
            ?<Card.Link onClick={(e) => handleDelete(comment)}>Delete</Card.Link>
            :null
          }
        </Card.Body>
      </Card>
  ))}

  </>
  )
}

export default Comments
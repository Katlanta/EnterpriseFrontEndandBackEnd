//Standard Imports!
import React from 'react'
import '../Styles/Comments.css';
import axios from 'axios';
import Card from 'react';
import {useEffect, useState} from "react";

function Comments({user}) {
  const [comments, setComments] = useState()

  useEffect(() => {
    axios.post(REACT_APP_API_URL+`commentData/comments`)
    .then((res)=>{setComments(res.data)});  
  }, [])
  
  const handleDelete = (e,comment) => {
    console.log(comment)
    axios.delete(REACT_APP_API_URL+`commentData/comment?commentId=${comment._id}`)
    .then((res)=>{setComments(res.data)});  
  };
  return (
    <>
      {comments?.map((comment, index) => (
        <Card key={index} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{comment.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{comment.date}</Card.Subtitle>
          <Card.Text>
            {comment.text}
          </Card.Text>
          {
            user
            ?<Card.Link onClick={(e) => handleDelete(e, comment)}>Delete</Card.Link>
            :null
          }
        </Card.Body>
      </Card>
  ))}

</>
  )
}

export default Comments
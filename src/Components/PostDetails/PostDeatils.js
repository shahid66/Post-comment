import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const PostDeatils = (props) => {
    const {Postid}=useParams();
    const[post,setPost]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${Postid}`).then(res =>res.json()).then(data =>setPost(data))
    },[Postid]);

    const[comments,setComments]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments`).then(res =>res.json()).then(data =>setComments(data))
    },[Postid]);

  
    return (
        <div>
 <Card  variant="outlined">
        <CardContent>
          <Typography color="secondary"  >
            {post.title}
            
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" >
            {post.body}
            <br />
            
          </Typography>
        </CardContent>
       
      </Card>
            <div className='commentDetails'>
              
               {
                 comments.filter(cmt=>cmt.postId==Postid).map(cmm=><Comment comment={cmm}></Comment>)
               }
              
            </div>
        </div>
    );
};

export default PostDeatils;
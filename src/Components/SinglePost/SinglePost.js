import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
    
    const {id,title,body}=props.post;
    return (
        <Card  variant="outlined">
        <CardContent style={{background:'#3f51b5'}}>
          <Typography style={{color:'yellow'}} >
            {title}
            
          </Typography>
          <br />
          <Typography variant="body2" style={{color:'white'}} >
            {body}
            <br />
            
          </Typography>
        </CardContent>
        <CardActions style={{background:'#3f51b5'}}>
          <Link style={{textDecoration:'none'}} to={"/post/" + id}><Button style={{color:'white'}} size="small"> More</Button></Link>
        </CardActions>
      </Card>
    );
};

export default SinglePost;
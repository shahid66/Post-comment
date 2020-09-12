import React, { useState, useEffect } from 'react';
import SinglePost from '../SinglePost/SinglePost';

const Post = (props) => {
    const[allpost,setAllpost]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data=>setAllpost(data))
    },[])
    return (
        <div>
            {
                allpost.map(pd=><SinglePost post={pd}></SinglePost>)
            }
        </div>
    );
};

export default Post;
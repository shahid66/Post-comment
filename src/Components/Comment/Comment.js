import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';


const Comment = (props) => {

    const { email, id,body } = props.comment;



    return (
        <div style={{border:'1px solid lightgray'}}>



            <List>

                <div style={{ display: "flex" }}>
                    <ListItemIcon>
                        <img style={{
                            width: '70px',
                            borderRadius: '50%',marginLeft:'10px'
                        }} src={`https://loremflickr.com/320/240?lock=${id}`} alt=""/>
                    </ListItemIcon>
                    <ListItemText style={{ paddingTop: '5px', paddingLeft: '10px' }} primary={email} />
                </div>
                <div>
                    <ListItemText style={{ paddingLeft: '80px' }} primary={<h4 style={{margin:'0px'}}>Comment: <small>{body}</small></h4>} />
                </div>


            </List>
        </div>
    );
};

export default Comment;
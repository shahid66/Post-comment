import React from 'react';
import { AppBar, Toolbar, Menu, MenuItem, Button } from '@material-ui/core';
import {Link} from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
<AppBar position="static">
  <Toolbar className='menui' >
      <Button component={Link} to="/home">Home</Button>
      <Button component={Link} to="/allpost">All Post</Button>
      <Button component={Link} to="/about">About us</Button>
  </Toolbar>
</AppBar>
    );
};

export default Header;
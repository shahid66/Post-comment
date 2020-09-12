import React from 'react';

import { Container, Grid } from '@material-ui/core';
import Post from './Components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDeatils from './Components/PostDetails/PostDeatils';
import Header from './Components/Header/Header';


function App() {

  return (

    <Router>
      <Header></Header>
      <Container>

        <Grid container justify="center">
          <Grid item lg={8} sm={12} md={6}>
            <Switch>
              <Route  path='/home'>
                <Post></Post>
              </Route>
              <Route  path='/allpost'>
                <Post></Post>
              </Route>
              <Route exact path='/'>
                <Post></Post>
              </Route>
              <Route path='/post/:Postid'>
                <PostDeatils></PostDeatils>
              </Route>
              <Route  path='*'>
                <h3>404</h3>
              </Route>
            </Switch>
          </Grid>
        </Grid>

      </Container>

    </Router>


  );
}

export default App;

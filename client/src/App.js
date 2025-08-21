import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="lg">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Grow in>
                <Container>
                  <Grid
                    container
                    justify="space-between"
                    alignItems="stretch"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={7}>
                      <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Form
                        currentId={currentId}
                        setCurrentId={setCurrentId}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grow>
            )}
          />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;


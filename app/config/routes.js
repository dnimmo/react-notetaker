// ES6 import statements, replaces 'require'
import React from 'react';
import Main from '../components/main';
import Home from '../components/home';
import Profile from '../components/profile';

// ES6 allows you to import multiple things from one module. Because Router, Route and DefaultRoute all match names of properties in the react-router module, these can be imported easily as below, and will give access to three separate variables named Router, Route and DefaultRoute
import { Router, Route, DefaultRoute } from 'react-router';

// Instructions for app.js - this ensures that the "Main" component is always displayed, and sets the default route for the sub-component to Home 
export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="profile" path="profile/:username" handler={Profile} />
    <DefaultRoute handler={Home} />
  </Route>
)
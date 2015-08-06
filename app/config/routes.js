var React = require('react');
var Main = require('../components/main');
var Home = require('../components/home');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

// Instructions for app.js - this ensures that the "Main" component is always displayed, and sets the default route for the sub-component to Home 
module.exports = (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
  </Route>
)
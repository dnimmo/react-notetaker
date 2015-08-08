// ES6 import statments (replaces 'require')
import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

// ES6 '(argument) =>' rather than using 'function(argument)'
// React Router will pass state argument
Router.run(routes, (Root, state) => {
  // {...state} copies the state properties to Root.props
  React.render(<Root {...state} />, document.getElementById('app'));
})
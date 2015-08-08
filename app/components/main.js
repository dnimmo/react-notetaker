// ES6's import replaces 'require'
import React from 'react';

// This replaces var RouteHandler = require('react-router').RouteHandler;
import {RouteHandler} from 'react-router';
import SearchGithub from './search-github.js';


// Create the "Main" component. This Component puts out the nav bar, as well as the container for the view of the current route. The default route is in "home.js", and anything else is driven by "/profile/[username]" on the url, which is handled in profile.js
// This is using ES6 classes
class Main extends React.Component{
  render(){
    // Where the RouteHandler component is called, the spread arguments being passed as this.props is the {...state} argument from app.js. This is being passed down so that each component can get information about the route that they're on through their properties (this.props)
    return (
     <div className='mainContainer'>
        <nav className='navbar navbar-default' role='navigation'>
          <div className='col-sm-7 col-sm-offset-2' style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className='container'>
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  }
};

export default Main;
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SearchGithub = require('./search-github.js');

// Create the "Main" component. This Component puts out the nav bar, as well as the container for the view of the current route. The default route is in "home.js", and ahything else is driven by "/profile/[username]" on the url, which is handled in profile.js
var Main = React.createClass({
  render: function(){
    return (
     <div className='mainContainer'>
        <nav className='navbar navbar-default' role='navigation'>
          <div className='col-sm-7 col-sm-offset-2' style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className='container'>
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = Main;
var React = require('react');
var Router = require('react-router');
var UserProfile = require('./github/user-profile.js');
var Repos = require('./github/repos.js');
var Notes = require('./notes/notes.js');

var Profile = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return {
      notes: ['Note 1', 'Note 2'],
      bio: {name: 'David'},
      repos: [1,2,3]
    }
  },
  render: function(){
    // params.username is set in routes.js
    var username = this.getParams().username;
    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className='col-md-4'>
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className='col-md-4'>
          <Notes username={username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;

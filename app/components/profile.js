var React = require('react');
var Router = require('react-router');
var UserProfile = require('./github/user-profile.js');
var Repos = require('./github/repos.js');
var Notes = require('./notes/notes.js');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  // Set up the initial state's properties
  getInitialState: function(){
    return {
      notes: ['Note 1', 'Note 2'],
      bio: {name: 'David'},
      repos: [1,2,3]
    }
  },
  componentDidMount: function(){
    // This is called when the component is mounted in the view
    this.ref = new Firebase('https://glaring-inferno-8473.firebaseio.com');
    // Get the data for the username passed in to the profile component. Firebase ensures that when this data changes in its database, this will change here too
    var childRef = this.ref.child(this.getParams().username);
    // bindAsArray is added by the ReactFireMixin. Here we're using it to get the notes associated with the user passed in through childRef
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function(){
    // Remove listener when the component is not in use
    this.unbind('notes');
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

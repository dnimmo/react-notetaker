var React = require('react');
var Router = require('react-router');
var UserProfile = require('./github/user-profile.js');
var Repos = require('./github/repos.js');
var Notes = require('./notes/notes.js');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers.js');

var Profile = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  // Set up the initial state's properties
  getInitialState: function(){
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  componentDidMount: function(){
    // This is called when the component is mounted in the view
    this.ref = new Firebase('https://glaring-inferno-8473.firebaseio.com');
    // Get the data for the username passed in to the profile component. Firebase ensures that when this data changes in its database, it will be changed here as well, which in turn will update the view
    var childRef = this.ref.child(this.getParams().username);
    // bindAsArray is added by the ReactFireMixin. Here we're using it to get the notes associated with the user passed in through childRef
    this.bindAsArray(childRef, 'notes');
    
    helpers.getGithubInfo(this.getParams().username)
      .then(function(obj){
        this.setState({
          bio: obj.bio,
          repos: obj.repos
        });
    }.bind(this)); // bind 'this' to the .then(), so the .then() isn't using a different 'this'
  },
  componentWillUnmount: function(){
    // Remove listener when the component is not in use
    this.unbind('notes');
  },
  handleAddNote: function(newNote){
    // Function to add new notes into Firebase
    this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
  },
  render: function(){
    // params.username is set in routes.js
    var username = this.getParams().username;
    // This function controls the profile view, which is made up of three components: UserProfile (github/user-profile.js), Repos (github/repos.js) and Notes (notes/notes.js). The notes function passes the addNote function which is defined further up this file, along with any pre-existing notes, which it gets from Firebase in the 'componentDidMount' function (further up this file) under this.bindAsArray. 
    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className='col-md-4'>
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className='col-md-4'>
          <Notes 
            username={username} 
            notes={this.state.notes}
            addNote={this.handleAddNote}/>
        </div>
      </div>
    )
  }
});

module.exports = Profile;

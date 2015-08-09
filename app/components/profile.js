// ES6's 'import' replaces 'require'
import React from 'react';
import UserProfile from './github/user-profile.js';
import Repos from './github/repos.js';
import Notes from './notes/notes.js';
import Firebase from 'firebase';
import helpers from '../utils/helpers.js';
import Rebase from 're-base';

// Link to Firebase
var base = Rebase.createClass('https://glaring-inferno-8473.firebaseio.com/');

class Profile extends React.Component{
  // As I'm using ES6, I can call a constructor as soon as a component is called into the view
  constructor(props){
    // You can't use 'this' without passing props in to your constructor
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []      
    }
  }
  init(){
    // Initialise data on entry / route change
    // Get the data for the username passed in to the profile component. Firebase ensures that when this data changes in its database, it will be changed here as well, which in turn will update the view
    this.ref = base.bindToState(this.router.getCurrentParams().username, {
      context: this,
      asArray: true,
      state: 'notes'
    });
    // Get Github info for the given user (from params.username). This comes from utils/helpers.js
    helpers.getGithubInfo(this.router.getCurrentParams().username)
      .then((obj) =>{
        this.setState({
          bio: obj.bio,
          repos: obj.repos
        });
    }); 
  }
  componentWillMount(){
    this.router = this.context.router;
  }
  componentDidMount(){
    // This is called when the component is mounted in the view
    // Initialise this.props
    this.init(); 
  }
  componentWillUnmount(){
    // Unbind the current notes when state changes (so that you don't see notes for the last person you looked at on the next person you look at!)
    base.removeBinding(this.ref);
  }
  componentWillReceiveProps(){
    // This function allows us to continue to listen for state changes and handle them accordingly
    base.removeBinding(this.ref);
    // Initialise new this.props
    this.init();
  }
  handleAddNote(newNote){
    // Allow users to add a new note into the database
    base.post(this.router.getCurrentParams().username, {
      data: this.state.notes.concat([newNote])
    })
  }
  render(){
    // params.username is set in routes.js
    var username = this.router.getCurrentParams().username;
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
            addNote={this.handleAddNote.bind(this)}/>
        </div>
      </div>
    )
  }
};

Profile.contextTypes = {
  router : React.PropTypes.func.isRequired
}

// ES6's export default replaces module.exports
export default Profile;

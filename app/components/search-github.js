// ES6 import replaces 'require'
import React from 'react';

// ES6 class - note the lack of commas between functions; this isn't an object so they're not required
class SearchGithub extends React.Component{
  handleSubmit(){
    // Router is used in this way as we can't use mixins in ES6
    var router = this.context.router;
    var usernameNode = this.refs.username.getDOMNode();
    var username = usernameNode.value;
    usernameNode.value = '';
    // transitionTo is added through the 'router' contextType. The first param is the name of the route, and the second param is the thing being passed in (in this case, username)
    router.transitionTo('profile', {username});    
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group col-sm-7'>
          <input type='text' className='form-control' ref='username' />
        </div>
        <div className='form-group col-sm-5'>
          <button type='submit' className='btn btn-block btn-primary'>Search Github</button>
        </div>
      </form>
    )
  }
};

// Tells React that this component needs the context that's passed in by React-Router
SearchGithub.contextTypes = {
  router: React.PropTypes.func.isRequired
}

// ES6's 'export default' replaces 'module.exports'
export default SearchGithub;
var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
  mixins: [Router.Navigation],
  handleSubmit: function(){
    var usernameNode = this.refs.username.getDOMNode();
    var username = usernameNode.value;
    usernameNode.value = '';
    // transitionTo is added through Router.Navigation. The first param is the name of the route, and the second param is the thing being passed in (in this case, username)
    this.transitionTo('profile', {username});
    
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group col-sm-7'>
          <input type='text' className='form-control' ref='username' />
        </div>
        <div className='form-group col-sm-5'>
          <button type='submit' className='btn btn-block btn-primary'>Search Github</button>
        </div>
      </form>
    )
  }
});

module.exports = SearchGithub;
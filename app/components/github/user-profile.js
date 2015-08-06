var React = require('react');

var UserProfile = React.createClass({
  render: function(){
    return (
      <div>
        <h3>User profile</h3>
        <p>Username: {this.props.username}</p>
        <p>Bio: {this.props.bio}</p>
      </div>
    )
  }
});

module.exports = UserProfile;
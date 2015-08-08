var React = require('react');

var UserProfile = React.createClass({
  // Validate the properties that are passed in. Without a username or bio, this component won't do anything, so they might as well be set as isRequired.
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
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
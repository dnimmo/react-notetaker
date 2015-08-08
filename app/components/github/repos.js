var React = require('react');

var Repos = React.createClass({
  // Validate the properties that are passed in. Without a username or repos, this component won't do anything, so they might as well be set as isRequired.
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function(){
    return (
      <div>
        <h3>Repos</h3>
        <p>Repos: {this.props.repos}</p>
      </div>
    )
  }
});

module.exports = Repos;
var React = require('react');

var Repos = React.createClass({
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
var React = require('react');

var Repos = React.createClass({
  // Validate the properties that are passed in. Without a username or repos, this component won't do anything, so they might as well be set as isRequired.
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function(){
    var repos = this.props.repos.map(function(repo, index){
      // Note: React needs the 'key={index}' in order to allow mapping to work
      return (
        <li className='list-group-item' key={index}>
          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
          {repo.description && <p>{repo.description}</p>}
        </li>
      );
    });
    return (
      <div>
        <h3>User Repos</h3>
        <ul className='list-group'>
          {repos}  
        </ul>
      </div>
    )
  }
});

module.exports = Repos;
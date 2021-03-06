// ES6's 'import' replaces 'require'
import React from 'react';

class Repos extends React.Component{
  // ES6 so no "function", and I can use '=>' inside render() as well
  render(){
    var repos = this.props.repos.map((repo, index) => {
      // Note: React needs the 'key={index}' in order to allow mapping to work
      return (
        <li className='list-group-item' key={index}>
          {repo.html_url && <h4><a href={repo.html_url} target='_blank'>{repo.name}</a></h4>}
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
}

// PropTypes have to be added to the class in ES6
Repos.PropTypes = {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired  
}

export default Repos;
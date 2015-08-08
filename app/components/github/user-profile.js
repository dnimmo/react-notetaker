// ES6 import statement replaces 'require'
import React from 'react';

class UserProfile extends React.Component{
  render(){
    // Renders user info, but only if the info actually exists in the data returned from the Github API
    return (
      <div>
        <h3>User profile</h3>
        {this.props.bio.avatar_url && <li className='list-group-item'><img src={this.props.bio.avatar_url} className='img-responsive'/></li>}
        {this.props.bio.name && <li className='list-group-item'>Name: {this.props.bio.name}</li>}
        {this.props.bio.login && <li className='list-group-item'>Userame: {this.props.bio.login}</li>}
        {this.props.bio.email && <li className='list-group-item'>Email: {this.props.bio.email}</li>}
        {this.props.bio.location && <li className='list-group-item'>Location: {this.props.bio.location}</li>}
        {this.props.bio.company && <li className='list-group-item'>Company: {this.props.bio.company}</li>}
        {this.props.bio.followers && <li className='list-group-item'>Followers: {this.props.bio.followers}</li>}
        {this.props.bio.following && <li className='list-group-item'>Following: {this.props.bio.following}</li>}
        {this.props.bio.public_repos && <li className='list-group-item'>Public: {this.props.bio.public_repos}</li>}
        {this.props.bio.blog && <li className='list-group-item'>Website: <a href={this.props.bio.blog} target='_blank'>{this.props.bio.blog}</a></li>}
      </div>
    )
  }
}

// ES6 export replaces module.exports
export default UserProfile;
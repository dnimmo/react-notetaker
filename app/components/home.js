// This handles the default route ('/');
// ES6's 'import' statement replaces 'require'
import React from 'react';

// ES6 class
class Home extends React.Component{
  render(){
    return (
      <h2 className='text-center'>
        Search by Github username above
      </h2>      
    )
  }
}

// export default replaces module.exports
export default Home;
// ES6 import statement replaces 'require'
import React from 'react';

// ES6 classes
class NotesList extends React.Component{
  // Build up <li>s for every note against the current profile and then output them inside the <ul> in the return statement on render
  // I'm using ES6 now so no need to type function(). Also in the .map(), I can use '(note, index) =>' instead of function(note, index)
  render(){
    var notes = this.props.notes.map((note, index) => {
      return <li className='list-group-item' key={index}>{note}</li>
    });
    return (
      <ul className = 'list-group'>
        {notes} 
      </ul>
    )
  }
};

// ES6 export default replaces 'module.export'
export default NotesList;
// ES6's 'import' replaces 'require'
import React from 'react';
import NotesList from './notes-list.js';
import AddNote from './add-note.js';

class Notes extends React.Component{
  // ES6 so no need for "function()"
  render(){
    // Pass notes into the NotesList component (at ./notes-list.js) 
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNote username={this.props.username} addNote={this.props.addNote}/>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
};

// PropTypes need to be added as a property on the class
Notes.PropTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
};

// export default Notes replaces module.exports = Notes
export default Notes;
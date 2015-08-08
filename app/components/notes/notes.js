var React = require('react');
var NotesList = require('./notes-list.js');
var AddNote = require('./add-note.js');

var Notes = React.createClass({
   // Validate the properties that are passed in. Without a username or notes, this component won't do anything, so they might as well be set as isRequired. The addNote function is required to enable new notes to be added
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render: function(){
    // Pass notes into the NotesList component (at ./notes-list.js) 
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNote username={this.props.username} addNote={this.props.addNote}/>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
});

module.exports = Notes;
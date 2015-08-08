var React = require('react');
var NotesList = require('./notes-list.js')

var Notes = React.createClass({
   // Validate the properties that are passed in. Without a username or notes, this component won't do anything, so they might as well be set as isRequired.
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },
  render: function(){
    // Pass notes into the NotesList component (at ./notes-list.js) 
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
});

module.exports = Notes;
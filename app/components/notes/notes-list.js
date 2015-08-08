var React = require('react');

var NotesList = React.createClass({
  // Build up <li>s for every note against the current profile and then output them inside the <ul> in the return statement on render
  render: function(){
    var notes = this.props.notes.map(function(note, index){
      return <li className='list-group-item' key={index}>{note}</li>
    });
    return (
      <ul className = 'list-group'>
        {notes} 
      </ul>
    )
  }
});

module.exports = NotesList;
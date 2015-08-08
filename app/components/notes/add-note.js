var React = require('react');

var AddNote = React.createClass({
  // Validate the properties that are passed in. Without a username or the ability to add notes, this component won't do anything, so they might as well be set as isRequired.
  PropTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  handleSubmit: function(){
    var noteNode = this.refs.note.getDOMNode();
    var newNote = noteNode.value;
    noteNode.value = '';
    this.props.addNote(newNote);
  },
  render: function(){
    // Note: "ref" on the input field is a React thing - it lets you access anything inside this input with this.refs, in the same way as this.props; in the code below it'll be this.refs.note
    return (
      <div className='input-group'>
        <input type='text' className='form-control' ref='note' placeholder='Add New Note' />
        <span className='input-group-btn'>
          <button className='btn btn-default' type='button' onClick={this.handleSubmit}> Add </button>
        </span>
      </div>
    )
  }
});

module.exports = AddNote;
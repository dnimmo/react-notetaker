// ES6's module engine allows me to use 'import' as a replacement for 'require'. This creates a variable called React and assigns 'react' to it.
import React from 'react';

// ES6 allows us to create classes
class AddNote extends React.Component{
  handleSubmit(){
    var noteNode = this.refs.note.getDOMNode();
    var newNote = noteNode.value;
    noteNode.value = '';
    this.props.addNote(newNote);
  } // No need for commas between methods in ES6 as we're not in an object
  render(){
    // Note: "ref" on the input field is a React thing - it lets you access anything inside this input with this.refs, in the same way as this.props; in the code below it'll be this.refs.note
    // ES6 note: Using React.createClass, the 'this' keyword is automatically auto-bound. It isn't in the onClick handler however, so the .bind(this) in the onClick handler is to ensure that 'this' remains correct in the handleSubmit method
    return (
      <div className='input-group'>
        <input type='text' className='form-control' ref='note' placeholder='Add New Note' />
        <span className='input-group-btn'>
          <button className='btn btn-default' type='button' onClick={this.handleSubmit.bind(this)}> Add </button>
        </span>
      </div>
    )
  }
};

// Validate the properties that are passed in. Without a username or the ability to add notes, this component won't do anything, so they might as well be set as isRequired.
// In ES6 you need to add the PropTypes to the class, rather than defining them within the class
AddNote.PropTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}

// ES6 export default replaces 'module.export'
export default AddNote;
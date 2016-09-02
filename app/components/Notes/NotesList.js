import React, { Component } from 'react';

class NotesList extends Component {
    render() {

      var notes = this.props.notes.map((note, index) => <li className='list-group-item' key={index}>{note['.value']}</li>)

      return (

        <ul className='list-group'>
          {notes}
        </ul>
      );
    }
}

export default NotesList;

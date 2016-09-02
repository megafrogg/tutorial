//React Requires
import React, { Component } from 'react';
import Router from 'react-router';
//Local app Requires
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
//Firebase Requires
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import reactMixin from 'react-mixin';


//Firebase initialization
var config = {
    apiKey: "AIzaSyDMySK67AUB8_nkEMItVTrnl-FD95NpYak",
    authDomain: "tutorial-43d4a.firebaseapp.com",
    databaseURL: "https://tutorial-43d4a.firebaseio.com",
    storageBucket: "tutorial-43d4a.appspot.com",
  };
  firebase.initializeApp(config);

class Profile extends Component {

  constructor() {
    reactMixin(Profile.prototype, ReactFireMixin) //Lets Fireplay play nice with ES6
    mixins: [ReactFireMixin],

    super();
    this.state = {
      notes: [1, 2, 3],
      bio: {
        name: 'Mitchell Rathgeb'
      },
      repos: ['a', 'b', 'c']
    }
  }


componentWillMount() {
  this.ref = Firebase.database().ref('/');
  var childRef = this.ref.child(this.props.params.username);
  this.bindAsArray(childRef, 'notes');
}

componentWillUnmount() {
  this.unbind('notes');
}

//update firebase with new notes
handleAddNotes(newNote) {
  this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
}

  render() {

    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile
            username={this.props.params.username}
            bio={this.state.bio} />
        </div>
        <div className='col-md-4'>
          <Repos
            username={this.props.params.username}
            repos={this.state.repos} />
        </div>
        <div className='col-md-4'>
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote}/>
        </div>
      </div>
    );
  }
}

export default Profile;

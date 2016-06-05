import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Note } from '../../collections/notes'
import { App } from '../app'

export default createContainer(
	() => {
		
		const handleCreateNote = (title) => {
		  Meteor.call('/note/create', title, (err, result) => {
        if (err) {
          console.log('error: ' + err.reason)
        }
      })
		}

	  return {
	  	handleCreateNote,
      placeholder: "New Note..."
	  }
  },
  App
)
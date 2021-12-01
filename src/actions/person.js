import * as action from '../redux/actions/person'
import person from '../assets/person'

function mockCreatePerson(person) {
  return Promise.resolve(person)
}

// src/actions/person.js (lanjutan)
export const getAllPerson = () => dispatch => {
    person.all()
      .then(persons => {
        dispatch({ type: action.INIT, payload: persons})
      })
  }
  
  export const addPerson = person => dispatch => {
    mockCreatePerson(person)
      .then(person => { 
  dispatch({ type: action.ADD, payload: person})
      })
  }
  

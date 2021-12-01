import { ADD, INIT } from '../actions/person.js'
const initialState = {
    persons : []
}
export default function(state = initialState, action) {
  switch(action.type) {
    case ADD:
        return {
            ...state,
            persons: [...state.persons, action.payload]
        }
    case INIT:
        // console.log('init')
        return {
            ...state,
            persons: action.payload
        }
    default:
      return state
  }
}

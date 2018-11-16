import { Map, List } from 'immutable';
import AssignmentConstants from '../constants/AssignmentConstants'

const initialState = Map({
  selected: Map({}),
  assignments: List([])
})

const AssignmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case AssignmentConstants.FETCH_SUCCESS:
      console.log('dispatched', action.payload);
      return state.set('assignments', List(action.payload))
    case AssignmentConstants.FETCH_FAILURE:
      return state
    case AssignmentConstants.SELECT_ASSIGNMENT:
      return state.set('selected', action.payload);
    default:
      return state;
  }
}

export default AssignmentReducer

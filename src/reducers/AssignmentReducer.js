import { List } from 'immutable';
import AssignmentConstants from '../constants/AssignmentConstants'

const AssignmentReducer = (state = List([]), action) => {
  switch (action.type) {
    case AssignmentConstants.FETCH_SUCCESS:
      console.log('dispatched');
      return List(action.payload)
    case AssignmentConstants.FETCH_FAILURE:
      return state
    default:
      return state;
  }
}

export default AssignmentReducer

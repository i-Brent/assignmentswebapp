import { Map, List } from 'immutable';
import SubmissionConstants from '../constants/SubmissionConstants';

const SubmissionsReducer = (state = List([]), action) => {
  switch (action.type) {
    case SubmissionConstants.FETCH_SUCCESS:
      return List(action.payload)
    case SubmissionConstants.FETCH_FAILURE:
      return state
    default:
      return state
  }
}

export default SubmissionsReducer

import AssignmentConstants from '../constants/AssignmentConstants';
import AssignmentReducer from '../reducers/AssignmentReducer';
import { Map } from 'immutable';

export const AssignmentFetchSuccess = json => {
  console.log('in action');
  return ({
  type: AssignmentConstants.FETCH_SUCCESS,
  payload: json.map((assignment) => (Map(assignment)))
})}

export const AssignmentFetchFail = json => ({
  type: AssignmentConstants.FETCH_SUCCESS,
  payload: !!json.error
})

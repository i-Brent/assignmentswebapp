import AssignmentConstants from '../constants/AssignmentConstants';
import { Map } from 'immutable';

export const AssignmentsFetch = () => {
  return async function (dispatch) {
    const response = await fetch(`https://api.edmodo.com/assignments?access_token=${AssignmentConstants.ACCESS_TOKEN}`)
    const json = await response.json()
    json.error ? dispatch(AssignmentFetchFail(json)) : dispatch(AssignmentFetchSuccess(json))
  }
}

export const SelectAssignmnet = (payload) => {
  return function(dispatch) {
    dispatch(HighlightAssignment(payload))
  }
}

export const AssignmentFetchSuccess = json => {
  return ({
  type: AssignmentConstants.FETCH_SUCCESS,
  payload: json.map((assignment) => (Map(assignment)))
})}

export const AssignmentFetchFail = json => ({
  type: AssignmentConstants.FETCH_SUCCESS,
  payload: !!json.error
})

export const HighlightAssignment = payload => ({
  type: AssignmentConstants.SELECT_ASSIGNMENT,
  payload
})

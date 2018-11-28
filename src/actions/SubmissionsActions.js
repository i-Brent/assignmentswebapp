import SubmissionConstants from '../constants/SubmissionConstants';
import { Map } from 'immutable';

export const FetchSubmissions = (assignmentId) => {
  return async function (dispatch) {
    console.log('assignmentId', assignmentId);
    const response = await fetch(`https://api.edmodo.com/assignment_submissions?assignment_id=${assignmentId}&_=1543356290429&access_token=${SubmissionConstants.ACCESS_TOKEN}`)
    const json = await response.json()
    console.log('json', json);
    json.error ? dispatch(SubmissionFetchFailure(json)) : dispatch(SubmissionFetchSuccess(json))
  }
}

export const SubmissionFetchSuccess = (payload) => ({
  type: SubmissionConstants.FETCH_SUCCESS,
  payload: payload.map((submission) => (Map(submission)))
})

export const SubmissionFetchFailure = (payload) => ({
  type: SubmissionConstants.FETCH_FAILURE,
  payload
})

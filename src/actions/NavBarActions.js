import AssignmentConstants from '../constants/AssignmentConstants';
import SubmissionConstants from '../constants/SubmissionConstants';

export const ToggleNav = (payload) => {
  return function (dispatch) {
    payload ? dispatch(NavBarSubmissions(payload)) : dispatch(NavBarAssignment(payload))
  }
}

export const NavBarAssignment = payload => {
  return ({
    type: AssignmentConstants.NAV_ASSIGNMENT,
    payload
  });
}

export const NavBarSubmissions = payload => {
  return ({
    type: SubmissionConstants.NAV_SUBMISSIONS,
    payload
  });
}

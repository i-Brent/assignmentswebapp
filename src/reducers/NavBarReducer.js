import AssignmentConstants from '../constants/AssignmentConstants'
import SubmissionConstants from '../constants/SubmissionConstants'

const NavBarReducer = (state = false, action) => {
  switch (action.type) {
    case AssignmentConstants.NAV_ASSIGNMENT:
      return false;
    case SubmissionConstants.NAV_SUBMISSIONS:
      return true;
    default:
      return state;
  }
}

export default NavBarReducer

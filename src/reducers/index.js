import { combineReducers } from 'redux'
import AssignmentReducer from './AssignmentReducer'
import NavBarReducer from './NavBarReducer'
import SubmissionsReducer from './SubmissionsReducer'

export default combineReducers({
  AssignmentReducer,
  NavBarReducer,
  SubmissionsReducer
})

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AssignmentConstants from '../constants/AssignmentConstants';
//components
import Assignment from './Assignment';
//css
import { Container, ListGroup } from 'reactstrap';
//actions
import * as assignmentActions from '../actions/AssignmentActions'

class AssignmentsBar extends Component {
  componentDidMount = () => {
    console.log('props', this.props);
    this.props.assignmentActions.AssignmentsFetch(this.props.dispatch)
  }
  render () {
    const assignments = this.props.state.AssignmentReducer.get('assignments')
    return (
      <ListGroup>
        {assignments.map((assignment, key) => {
          return (<Assignment assignment={assignment} key={key}/>)
        }
        )}
      </ListGroup>
    )
  }
}

const mapStateToProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  assignmentActions: bindActionCreators(assignmentActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentsBar);

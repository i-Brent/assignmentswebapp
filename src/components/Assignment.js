import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as assignmentActions from '../actions/AssignmentActions';
import { ListGroupItem } from 'reactstrap';

class Assignment extends Component {

  humanizeDate = () => {
    let date = new Date(this.props.assignment.get('due_at'))
    let humanizedDate = date.toDateString().split(' ')
    humanizedDate.shift()
    humanizedDate[1] = humanizedDate[1] + ','
    return humanizedDate.join(' ');
  }

  selectAssignmnet = () => {
    this.props.assignmentActions.SelectAssignmnet(this.props.assignment)
  }

  render () {
    return(
      <ListGroupItem onClick = {(e) => {this.selectAssignmnet()}}>
        <div className = 'row'>
          <h1>{this.props.assignment.get('title')}</h1>
        </div>
        <div className= 'row'>
          <p>{this.humanizeDate()}</p>
        </div>
      </ListGroupItem>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  assignmentActions: bindActionCreators(assignmentActions, dispatch),
})

export default connect(null, mapDispatchToProps)(Assignment);

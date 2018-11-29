import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as assignmentActions from '../actions/AssignmentActions';
import { ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
      <Link to={'/assignment/' + this.props.assignment.get('id')}  >
      <ListGroupItem onClick = {(e) => {this.selectAssignmnet()}} className="text-primary">
        <div className = 'row'>
          <h1>{this.props.assignment.get('title')}</h1>
        </div>
        <div className= 'row'>
          <p>{this.humanizeDate()}</p>
        </div>
      </ListGroupItem>
      </Link>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  assignmentActions: bindActionCreators(assignmentActions, dispatch),
})

export default connect(null, mapDispatchToProps)(Assignment);

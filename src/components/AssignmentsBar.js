import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssignmentConstants from '../constants/AssignmentConstants';
//components
import Assignment from './Assignment';
//css
import { Container, Row, Col } from 'reactstrap';
//actions
import { AssignmentFetchFail, AssignmentFetchSuccess } from '../actions/AssignmentActions'

class AssignmentsBar extends Component {
  componentDidMount = () => {
    this.AssignmentsFetch()
  }

  AssignmentsFetch = async () => {
    const response = await fetch(`https://api.edmodo.com/assignments?access_token=${AssignmentConstants.ACCESS_TOKEN}`)
    const json = await response.json()
    json.error ? AssignmentFetchFail(json) : AssignmentFetchSuccess(json)
  }

  makeList() {
    let assignments = [1, 2, 3, 4, 5, 6]
    return assignments;
  }

  render () {
    return (
      <Container>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Assignment number={num}/>
        ))}
      </Container>
    )
  }
}

const mapDispatchToProps = {
  AssignmentFetchFail,
  AssignmentFetchSuccess
}

export default connect(null, mapDispatchToProps)(AssignmentsBar);

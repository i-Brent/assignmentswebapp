import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AssignmentConstants from '../constants/AssignmentConstants';
//components
import Assignment from './Assignment';
import AddAssignmentModal from './AddAssignmentModal'
//css
import { Container, ListGroup, Pagination, PaginationItem, PaginationLink, ListGroupItem } from 'reactstrap';
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
      <div>
        <ListGroup>
          {assignments.map((assignment, key) => {
            return (<Assignment assignment={assignment} key={key}/>)
          })}
          <ListGroupItem className="text-primary" onClick ={ () => {

          }}>
            <h3>Add New</h3>
            <h3>+</h3>
          </ListGroupItem>
        </ListGroup>
        <Container>
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
        </Container>
      </div>
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

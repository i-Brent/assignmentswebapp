import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Submission from './Submission';
import * as SubmissionsActions from '../actions/SubmissionsActions';

class SubmissionsView extends Component {
  componentDidMount = () => {
    const { AssignmentReducer } = this.props.state
    console.log(AssignmentReducer.toJS());
    if(AssignmentReducer && AssignmentReducer.get('selected') && AssignmentReducer.getIn(['selected', 'id'])) {
      this.props.SubmissionsActions.FetchSubmissions(AssignmentReducer.getIn(['selected', 'id']))
    }
  }

  render() {
    return (
      <Container>
        {this.props.state.SubmissionsReducer.map((submission, key) => (
          <Submission submission={submission} key={key}/>
        ))}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  SubmissionsActions: bindActionCreators(SubmissionsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionsView);

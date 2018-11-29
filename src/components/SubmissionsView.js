import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Submission from './Submission';
import * as SubmissionsActions from '../actions/SubmissionsActions';

class SubmissionsView extends PureComponent {

  componentDidMount = () => {
    const { AssignmentReducer } = this.props.state
    if(AssignmentReducer && AssignmentReducer.get('selected') && AssignmentReducer.getIn(['selected', 'id'])) {
      this.props.SubmissionsActions.FetchSubmissions(AssignmentReducer.getIn(['selected', 'id']))
    }
  }

  fetchSubmissions = () => {
    const { AssignmentReducer } = this.props.state
    if(AssignmentReducer && AssignmentReducer.get('selected') && AssignmentReducer.getIn(['selected', 'id'])) {
      this.props.SubmissionsActions.FetchSubmissions(AssignmentReducer.getIn(['selected', 'id']))
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const next = nextProps.state.AssignmentReducer.getIn(['selected', 'id'])
    const current = this.props.state.AssignmentReducer.getIn(['selected', 'id'])
    if(current !== next) {
      console.log('nextID', next);
      console.log('currentId', current);
      this.fetchSubmissions()
    }
  }

  render() {
    const currentTitle = this.props.state.AssignmentReducer.getIn(['selected', 'title'])
    return (

      <Container>
        <h1 className="text-primary">{currentTitle}</h1>
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

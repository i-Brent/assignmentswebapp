import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

class AssignmentView extends Component {
  render() {
    return (
      <Container>
        <h1>{this.props.state.getIn(['selected', 'title'])}</h1>
        <p>{this.props.state.getIn(['selected', 'description'])}</p>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state.AssignmentReducer
})

export default connect(mapStateToProps, null)(AssignmentView);

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

class AssignmentView extends Component {
  render() {
    console.log(this.props.state.get('selected'));
    return (
      <Container className='text-primary'>
        <h1>{this.props.state.getIn(['selected', 'title'])}</h1>
        <p className='text-secondary'>{this.props.state.getIn(['selected', 'description'])}</p>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state.AssignmentReducer
})

export default connect(mapStateToProps, null)(AssignmentView);

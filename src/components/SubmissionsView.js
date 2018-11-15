import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Submission from './Submission';

class SubmissionsView extends Component {
  render() {
    return (
      <Container>
        {[1,2,3,4].map((submission) => (
          <Submission number={submission}/>
        ))}
      </Container>
    )
  }
}

export default SubmissionsView;

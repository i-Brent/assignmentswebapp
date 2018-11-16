import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Submission extends Component {
  render () {
    return (
      <Row>
        <Col xs='4'>
          <img src={this.props.submission.get('creator').avatars.large}/>
        </Col>
        <Col xs='8'>
          <Container>
            <Row>
              <h5>
                {
                  this.props.submission.get('creator').first_name + " "
                  + this.props.submission.get('creator').last_name
                }
              </h5>
            </Row>
            <Row>
              <p>{this.props.submission.get('content')}</p>
            </Row>
          </Container>
        </Col>
      </Row>
    )
  }
}

export default Submission

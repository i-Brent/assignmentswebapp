import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Submission extends Component {
  render () {
    return (
      <Row>
        <Col xs='4'>
          <img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjgv_e41NTeAhXor1QKHbrFBe8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.booleanapp.com%2F&psig=AOvVaw1d4jFoGt_UAvaO2svKssvl&ust=1542311561198730"/>
        </Col>
        <Col xs='8'>
          <Container>
            <Row>
              <h5>Submission {this.props.number}</h5>
            </Row>
            <Row>
              <p>texas</p>
            </Row>
          </Container>
        </Col>
      </Row>
    )
  }
}

export default Submission

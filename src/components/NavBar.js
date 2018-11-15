import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class NavBar extends Component {
  render(){
    return(
      <Row>
        <Col xs='6'>
          <h3>Assignment</h3>
        </Col>
        <Col xs='6'>
          <h3>Submissions</h3>
        </Col>
      </Row>
    )
  }
}

export default NavBar;

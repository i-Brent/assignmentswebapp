import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import AssignmentsBar from './components/AssignmentsBar';
import SubmissionsView from './components/SubmissionsView';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
        <Col xs='4'>
        <Container>
          <AssignmentsBar/>
        </Container>
        </Col>
        <Col xs='8'>
          <Row>
            <NavBar/>
          </Row>
          <Row>
            <SubmissionsView/>
          </Row>
        </Col>
        </Row>
      </div>
    );
  }
}

export default App;

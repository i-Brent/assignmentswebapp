import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import AssignmentsBar from './components/AssignmentsBar';
import SubmissionsView from './components/SubmissionsView';
import AssignmentView from './components/AssignmentView';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    console.log(this.props.NavBarReducer);
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
            {this.props.NavBarReducer ? <SubmissionsView/> : <AssignmentView/>}
          </Row>
        </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, null)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import AssignmentsBar from './components/AssignmentsBar';
import SubmissionsView from './components/SubmissionsView';
import AssignmentView from './components/AssignmentView';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    console.log(this.props.NavBarReducer);
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' render={ () => (
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
                  <Route path='/' exact render= { () => (
                    <Container className='text-primary'>
                      <h3>Select An Assignment to View details</h3>
                    </Container>
                  )}/>
                  <Route path='/assignment_submissions/' component={SubmissionsView}/>
                  <Route path='/assignment/' component={AssignmentView}/>
                </Row>
              </Col>
            </Row>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, null)(App);

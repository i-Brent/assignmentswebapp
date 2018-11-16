import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import * as navActions from '../actions/NavBarActions'

class NavBar extends Component {
  render(){
    return(
      <Row>
        <Col xs='6'>
          <h3 onClick={(e)=>{this.props.navActions.ToggleNav(false)}}>
            Assignment
          </h3>
        </Col>
        <Col xs='6'>
          <h3 onClick={(e)=>{this.props.navActions.ToggleNav(true)}}>
            Submissions
          </h3>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  navActions: bindActionCreators(navActions, dispatch),
})

export default connect(null, mapDispatchToProps)(NavBar);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav, NavItem, NavLink } from 'reactstrap';
import * as navActions from '../actions/NavBarActions';
import classnames from 'classnames';

class NavBar extends Component {
  render(){
    return(
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.NavBarReducer === false })}
            onClick={(e)=>{this.props.navActions.ToggleNav(false)}}
          >
            Assignment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.NavBarReducer === true })}
            onClick={(e)=>{this.props.navActions.ToggleNav(true)}}
          >
            Submissions
          </NavLink>
        </NavItem>
      </Nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  navActions: bindActionCreators(navActions, dispatch),
})

const mapStateToProps = (state) => state

export default connect(null, mapDispatchToProps)(NavBar);

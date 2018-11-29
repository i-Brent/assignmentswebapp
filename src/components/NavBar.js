import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav, NavItem, NavLink } from 'reactstrap';
import * as navActions from '../actions/NavBarActions';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class NavBar extends Component {
  render(){
    return(
      <Nav tabs className="text-primary">
        <NavItem>
          <Link to={'/assignment/' + this.props.selected.get('id')}>
            <NavLink>
              Assignment
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/assignment_submissions/' + this.props.selected.get('id')}>
            <NavLink>
              Submissions
            </NavLink>
          </Link>
        </NavItem>
      </Nav>
    )
  }
}

const mapStateToProps = (state) => ({
  selected: state.AssignmentReducer.get('selected')
})

export default connect(mapStateToProps, null)(NavBar);

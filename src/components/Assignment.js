import React, { Component } from 'react';

class Assignment extends Component {

  render () {
    return(
      <div>
        <div className = 'row'>
          <h1>title {this.props.number}</h1>
        </div>
        <div className= 'row'>
          <p>date</p>
        </div>
      </div>
    )
  }
}

export default Assignment

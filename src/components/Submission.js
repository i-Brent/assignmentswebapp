import React, { Component } from 'react';
import {
  Container, Row, Col, Card,
  CardTitle, CardImg, CardBody, CardText
} from 'reactstrap';

class Submission extends Component {
  render () {
    return (
      <Card>
        <Row>
          <Col xs='4'>
            <CardImg width="100%" height= "100%" src={this.props.submission.get('creator').avatars.large}/>
          </Col>
          <Col xs='8'>
            <CardBody>
              <CardTitle>
                <h5>
                  {
                    this.props.submission.get('creator').first_name + " "
                    + this.props.submission.get('creator').last_name
                  }
                </h5>
              </CardTitle>
              <CardText>
                <p>{this.props.submission.get('content')}</p>
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default Submission

import React, { Component } from 'react';
import {
  Container, Row, Col, Card,
  CardTitle, CardImg, CardBody, CardText
} from 'reactstrap';

class Submission extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded : false
    }
  }

  toggleExpand = () => {
    this.state.expanded ? this.setState({expanded : false}) : this.setState({expanded : true});
  }

  render () {
    return (
      <Card className="text-secondary" onClick={(e) => {
        this.toggleExpand()
      }}>
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
              {this.state.expanded ?
              <CardText>
                <p>{this.props.submission.get('content')}</p>
              </CardText>
              :
              null
              }
            </CardBody>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default Submission

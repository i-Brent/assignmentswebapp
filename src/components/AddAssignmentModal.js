import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row} from 'reactstrap';

export default class AddAssignmentModal extends Component {
  constructor () {
    this.state = {
      id: 1
    }
  }

  incrementId = () => {
    this.setState({
      id: ++this.state.id
    })
  }

  render() {
    return (
      <Modal isOpen="static">
        <ModalHeader>New Assignment</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="assignmentTitle">Assignment Title</Label>
              <Input type="text" name="Title" id="assignmentTitle" placeHolder="title" />
            </FormGroup>
            <FormGroup>
              <Label for="AssignmentDesc">Assignment Desscription</Label>
              <Input type="textarea" name="Title" id="assignmentTitle" placeHolder="Enter The Assignment Title" />
            </FormGroup>
            <FormGroup>
              <Label for="DueDate">Date Due</Label>
              <Input type="date" name="date" id="DueDate" placeholder="date placeholder" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
            <Button color='primary'>Submit</Button>
            <Button color='secondary'>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

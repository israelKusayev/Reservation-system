import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';

class RegisterModal extends Component {
  state = {
    modal: false,
    msg: null,
    name: '',
    email: '',
    password: ''
  };

  toggle = () => {
    // Clear errors

    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // Create user object
    const newUser = {
      name,
      email,
      password
    };

    // Attempt to register
  };

  render() {
    const closeBtn = (
      <button className='close float-left' onClick={this.toggle}>
        &times;
      </button>
    );
    return (
      <div>
        <NavLink onClick={this.toggle} href='#'>
          הרשמה
        </NavLink>

        <Modal isOpen={this.state.modal} dir='rtl' toggle={this.toggle}>
          <ModalHeader close={closeBtn} toggle={this.toggle}>
            הרשם עם כתובת מייל חדשה
          </ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='שם'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='דוא"ל'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='סיסמה'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  הרשם
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;

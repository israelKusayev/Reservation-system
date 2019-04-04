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
  Alert,
  Spinner
} from 'reactstrap';
import { connect } from 'react-redux';
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

class RegisterModal extends Component {
  state = {
    modal: false,
    name: '',
    email: '',
    password: ''
  };

  componentDidUpdate = prevProps => {
    const { isAuthenticated } = this.props;
    if (this.state.modal) {
      if (isAuthenticated) {
        console.log(isAuthenticated);

        this.toggle();
      }
    }
  };

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
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
    this.props.register(newUser);
  };

  render() {
    const { isFetching, error } = this.props;

    const closeBtn = (
      <button className='close float-left' onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <NavLink onClick={this.toggle} href='#'>
          Register
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader close={closeBtn} toggle={this.toggle}>
            Please enter new email address
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='mb-3'
                  onChange={this.onChange}
                />
                {error.msg ? <Alert color='danger'>{error.msg}</Alert> : null}
                {isFetching ? (
                  <div className='flex-center'>
                    <Spinner style={{ margin: '0 auto' }} />
                  </div>
                ) : null}
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isFetching: state.loading,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(RegisterModal);

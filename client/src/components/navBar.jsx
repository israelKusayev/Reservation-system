import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import RegisterModal from './registerModal';
import LoginModal from './loginModal';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed='fixed' dark color='dark' expand='md'>
          <NavbarBrand
            color='white'
            className='ml-1 text-light pointer'
            onClick={() => this.props.history.push('/')}
          >
            FindRest
          </NavbarBrand>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/1/19/Food_Barnstar_Hires.png'
            height='30'
            width='30'
            alt=''
          />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <RegisterModal />
              </NavItem>
              <NavItem>
                <LoginModal />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);

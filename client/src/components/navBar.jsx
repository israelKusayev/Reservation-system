import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import RegisterModal from './registerModal';
import LoginModal from './loginModal';
import { logout } from '../actions/authActions';

import { connect } from 'react-redux';

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
    const guestLinks = (
      <>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </>
    );
    const userLinks = (
      <>
        <NavItem>
          <NavLink>home</NavLink>
        </NavItem>

        <UncontrolledDropdown nav inNavbar className='ml-2'>
          <DropdownToggle nav caret>
            {this.props.name}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.props.logout}>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
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
            src='https://banner2.kisspng.com/20180413/oyq/kisspng-restaurant-logo-lunch-5ad1606381cc10.5146934915236711395317.jpg'
            height='30'
            width='30'
            alt=''
          />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {this.props.isAuthenticated ? userLinks : guestLinks}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  name: state.auth.user ? state.auth.user.name : ''
});

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(NavBar)
);

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

import UserNavbar from './userNavbar';
import GuestNavbar from './guestNavbar';

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
    const { logout, name, isAuthenticated } = this.props;
    return (
      <div>
        <Navbar
          fixed='fixed'
          dark
          style={{ backgroundColor: '#0c1a20' }}
          expand='md'
        >
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
              {isAuthenticated ? (
                <UserNavbar logout={logout} name={name} />
              ) : (
                <GuestNavbar />
              )}
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

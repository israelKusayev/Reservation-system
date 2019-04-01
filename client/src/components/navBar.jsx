import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import RegisterModal from './registerModal';
import LoginModal from './loginModal';

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
          <NavLink>abc</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>efg</NavLink>
        </NavItem>
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
  isAuthenticated: state.auth.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(NavBar));

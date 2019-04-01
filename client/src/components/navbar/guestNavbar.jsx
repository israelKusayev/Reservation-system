import React from 'react';
import { NavItem } from 'reactstrap';
import RegisterModal from '../registerModal';
import LoginModal from '../loginModal';

export default function GuestNavbar() {
  return (
    <>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </>
  );
}

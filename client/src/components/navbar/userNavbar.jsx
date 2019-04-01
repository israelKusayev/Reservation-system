import React from 'react';
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export default function UserNavbar({ name, logout }) {
  return (
    <>
      <NavItem>
        <NavLink tag={RRNavLink} to='/home'>
          home
        </NavLink>
      </NavItem>

      <UncontrolledDropdown nav inNavbar className='ml-2'>
        <DropdownToggle nav caret>
          {name}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={logout}>Logout</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}

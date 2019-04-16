import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className=''>
        <h1>Hola</h1>
        <Button
          tag={RRNavLink}
          to='/order-table'
          className='text-white'
          outline
          color='primary'
        >
          Order a table
        </Button>
      </div>
    );
  }
}

export default Home;

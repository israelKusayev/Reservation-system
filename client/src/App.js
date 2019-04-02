import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/navbar/mainNavbar';
import MainForm from './components/mainForm';
import Loading from './components/loading';
import './utils/axiosSettings';
import { loadUser } from './actions/authActions';
import AddRestaurant from './components/addRestaurant';

class App extends Component {
  componentDidMount = () => {
    this.props.store.dispatch(loadUser());
  };

  render() {
    return (
      <>
        <NavBar />
        <Loading />

        <Switch>
          <Route path='/add-restaurant' component={AddRestaurant} />
          <Route path='/' component={MainForm} />
        </Switch>
      </>
    );
  }
}

export default App;

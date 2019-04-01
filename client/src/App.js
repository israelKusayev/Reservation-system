import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/navBar';
import MainForm from './components/mainForm';
import Loading from './components/loading';
import './utils/axiosSettings';
import { loadUser } from './actions/authActions';

class App extends Component {
  componentDidMount = () => {
    console.log(this.props.store);

    this.props.store.dispatch(loadUser());
  };

  render() {
    return (
      <>
        <NavBar />
        <Loading />

        <Switch>{<Route path='/' component={MainForm} />}</Switch>
      </>
    );
  }
}

export default App;

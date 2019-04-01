import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/navBar';
import MainForm from './components/mainForm';
import Loading from './components/loading';
import './utils/axiosSettings';

class App extends Component {
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

import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import NavBar from './components/navBar';
import MainForm from './components/mainForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <NavBar />
            <div>
              <MainForm />
            </div>
          </div>
          <Switch>
            {/* <Route path='/register' component={Register} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

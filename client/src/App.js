import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import NavBar from './components/navbar/mainNavbar';
import Home from './components/home';
import Loading from './components/loading';
import './utils/axiosSettings';
import { loadUser } from './actions/authActions';
import AddRestaurant from './components/addRestaurant';
import NotFound from './components/notFound';
import OrderTable from './components/orderTable';

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
          <Route path='/home' component={Home} />
          <Route path='/order-table' component={OrderTable} />
          <Route path='/not-found' component={NotFound} />

          <Redirect path='/' exact={true} component={Home} />
          <Redirect to='/not-found' />
        </Switch>
        <ReduxToastr />
      </>
    );
  }
}

export default App;

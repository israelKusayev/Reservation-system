import React from 'react';
import { Button, Form } from 'reactstrap';
import { schema } from '../formValidations/addRestaurantValidation';
import AddtableForm from './addtableForm';
import BaseForm from './baseForm';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions/restaurantAction';
class AddRestaurant extends BaseForm {
  state = {
    data: {
      name: '',
      city: '',
      street: '',
      openingHours: '',
      restaurantPhone: '',
      moreDetails: '',
      reservationHours: '',
      kosher: false,
      takeAway: false,
      parking: false,
      delivery: false,
      tables: []
    },
    errors: {}
  };

  schema = { ...schema };

  addTable = e => {
    e.preventDefault();
    let { tables } = this.state.data;
    tables.push({ anountOfDiners: '', tableCount: '' });
    this.setState({ data: { ...this.state.data, tables } });
  };

  handleTableChange = (e, index) => {
    let { tables } = this.state.data;
    tables[index][e.target.name] = e.target.value;
    this.setState({ data: { ...this.state.data, tables } });
  };

  doSubmit = () => {
    this.props.addRestaurant(this.state.data);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className='add-restaurant-container'>
          <div className='col-md-6'>
            {this.renderInput('name', 'Name')}
            {this.renderInput('city', 'City')}
            {this.renderInput('street', 'Street')}
            {this.renderInput('openingHours', 'Opening hours', 'time')}
            {this.renderInput('restaurantPhone', 'Restaurant phone', 'number')}
            {this.renderInput('moreDetails', 'More details', 'textarea')}

            {this.renderCheckbox('kosher', 'Kosher')}
            {this.renderCheckbox('takeAway', 'Take away')}
            {this.renderCheckbox('parking', 'Parking')}
            {this.renderCheckbox('delivery', 'Delivery')}
          </div>
          <div className='col-md-6'>
            {this.renderInput(
              'reservationHours',
              'Hours to reserve a place',
              'time'
            )}
            {this.state.data.tables.map((t, i) => {
              return (
                <AddtableForm
                  onChange={this.handleTableChange}
                  table={this.state.data.tables[i]}
                  index={i}
                  key={i}
                />
              );
            })}

            <Button
              onClick={this.addTable}
              className='text-white'
              outline
              color='secondary'
            >
              Add table
            </Button>
          </div>
        </div>
        <Button block>Add restaurant</Button>
      </Form>
    );
  }
}
export default connect(
  null,
  { addRestaurant }
)(AddRestaurant);

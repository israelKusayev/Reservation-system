import React, { Component } from 'react';
import joi from 'joi';
import RestInput from './customInputs/restInput';
import RestCheckbox from './customInputs/restCheckbox';

// this is base form class if you inhrite from this class
// you will need to implement

// 1 state (object with data and errors  ) // state ={data:{}, errors:{}}
// 2 schema (joi schema for validations)
// 3 doSubmit (func, called after Submit Is Clicked)
// 4 render (func, return the view)

export default class BaseForm extends Component {
  // render rest input
  renderInput = (name, label, type = 'text', placeholder = '') => {
    const { data, errors } = this.state;
    return (
      <RestInput
        type={type}
        name={name}
        value={data[name]}
        placeholder={placeholder}
        onChange={this.handleChange}
        onBlur={this.validateProperty}
        valid={errors[name]}
      >
        {label}
      </RestInput>
    );
  };

  // render checkbox
  renderCheckbox = (name, label) => {
    return (
      <RestCheckbox
        name={name}
        checked={this.state.data[name]}
        onChange={this.handleChange}
      >
        {label}
      </RestCheckbox>
    );
  };

  // handle input value changes
  handleChange = ({ target: { name, value, checked, type } }) => {
    let { data } = this.state;
    data[name] = type === 'checkbox' ? checked : value;
    this.setState({ data });

    if (!this.schema[name]) return;
    this.validateProperty({ name, value });
  };

  // handle form submit
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  // validate all form
  validate = () => {
    const { error } = joi.validate(this.state.data, this.schema, {
      abortEarly: false,
      allowUnknown: true
    });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // validate on change
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const propertySchema = { [name]: this.schema[name] };
    const { error } = joi.validate(obj, propertySchema);

    let { errors } = this.state;
    errors[name] = error ? error.details[0].message : null;
    this.setState({ errors });
  };
}

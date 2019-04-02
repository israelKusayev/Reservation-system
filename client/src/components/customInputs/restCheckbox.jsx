import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
function RestCheckbox({ children, name, checked, onChange }) {
  return (
    <FormGroup check>
      <Label check>
        <Input
          name={name}
          id={name}
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        {children}
      </Label>
    </FormGroup>
  );
}

RestCheckbox.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool
};

export default RestCheckbox;

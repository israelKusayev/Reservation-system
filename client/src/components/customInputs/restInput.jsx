import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

export default function RestInput({
  name,
  children,
  valid,
  onChange,
  value,
  type,
  placeholder
}) {
  return (
    <FormGroup>
      <Label for={name}>{children}</Label>
      <Input
        valid={valid !== undefined}
        invalid={valid ? true : false}
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onChange}
      />
      <FormFeedback>{valid}</FormFeedback>
    </FormGroup>
  );
}

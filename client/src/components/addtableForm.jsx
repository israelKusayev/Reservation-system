import React from 'react';
import { FormGroup, Label, Input, Row } from 'reactstrap';
function AddtableForm({ index: i, onChange, table }) {
  return (
    <Row>
      <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
        <Label for={'anountOfDiners' + i} className='mr-sm-2'>
          Amount of diners
        </Label>
        <Input
          type='number'
          min={0}
          name='anountOfDiners'
          id={'anountOfDiners' + i}
          placeholder='Anount of diners'
          onChange={e => onChange(e, i)}
          value={table.anountOfDiners}
        />
      </FormGroup>
      <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
        <Label for={'tableCount' + i} className='mr-sm-2'>
          Count
        </Label>
        <Input
          type='number'
          min={0}
          name='tableCount'
          id={'tableCount' + i}
          placeholder='Tables count'
          onChange={e => onChange(e, i)}
          value={table.tableCount}
        />
      </FormGroup>
    </Row>
  );
}

export default AddtableForm;

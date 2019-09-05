import React from 'react';
import { validatePhoneNumber } from '../helpers/validators';

const PhoneField = ({ field, form, setHasPhoneError }) => {
  let error = validatePhoneNumber(field.value, form.values);

  if (error) {
    setHasPhoneError(true);
  } else {
    setHasPhoneError(false);
  }

  return (
    <div>
      <input className='form-control' type="tel" {...field}/>
      {error ? <div className='alert-danger'>{error}</div> : null}
    </div>
  );
};

export default PhoneField;

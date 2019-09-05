import React from 'react';
import { validateEmail } from '../helpers/validators';

const EmailField = ({ field, form, setHasEmailError }) => {
  let error = validateEmail(field.value, form);

  if (error) {
    setHasEmailError(true);
  } else {
    setHasEmailError(false);
  }

  return (
    <div>
      <input className='form-control' {...field} type="email"/>
      {error ? <div className='alert-danger'>{error}</div> : null}
    </div>
  );
};

export default EmailField;

import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';

import EmailField from './EmailField';
import PhoneField from './PhoneField';

const initialValues = {
  email: '',
  phoneNumber: '',
};

const LoginForm = () => {
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPhoneError, setHasPhoneError] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values =>
        console.log('Submitted: ', values)
      }
    >
      {({ handleSubmit, handleChange }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <div className='form-group row justify-content-center'>
              <label className='col-sm-2' htmlFor='email'>Email</label>
              <div className="col-sm-6">
                <Field
                  name='email'
                  onChange={handleChange}
                  setHasEmailError={setHasEmailError}
                  component={EmailField}
                />
              </div>
            </div>
            <div className='form-group row justify-content-center'>
              <label className='col-sm-2' htmlFor='tel'>Phone number</label>
              <div className="col-sm-6">
                <Field
                  name='phoneNumber'
                  onChange={handleChange}
                  setHasPhoneError={setHasPhoneError}
                  component={PhoneField}
                />
              </div>
            </div>

            {!hasEmailError && !hasPhoneError ?
              <button type='submit' className='btn btn-primary'>
                Sign up
              </button> :
              <button type='submit' className='btn btn-primary' disabled>
                Sign up
              </button>
            }
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;

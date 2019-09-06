const phoneRegExp = /(([+][0-9]{1,3})|([0-9]{4}))\s*[\s]?[0-9]{1,3}([\s]?[0-9]{3})([\s]?[0-9]{3,4})/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validateEmail = (value, form) => {
  let error;
  if (!value && !phoneRegExp.test(form.values.phoneNumber)) {
    error = 'Required!';
  } else if (phoneRegExp.test(form.values.phoneNumber) && value) {
    if (!emailRegExp.test(value)) {
      error = 'Invalid email!';
    }
  } else if (!phoneRegExp.test(form.values.phoneNumber) && !emailRegExp.test(value)) {
    error = 'Invalid email';
  }

  return error;
};

export const validatePhoneNumber = (value, values) => {
  let error;
  if (!value && !emailRegExp.test(values.email)) {
    error = 'Required!';
  } else if (value && emailRegExp.test(values.email)) {
    if (!phoneRegExp.test(value)) {
      error = 'Invalid phone!';
    }
  } else if (!emailRegExp.test(values.email) && !phoneRegExp.test(value)) {
    error = 'Invalid phone!';
  }

  return error;
};

import { actions } from 'react-redux-toastr';
export const showError = (title, message = '', customOptions = {}) => {
  const options = {
    progressBar: true,
    ...customOptions
  };
  return actions.add({
    type: 'error',
    title,
    message,
    options
  });
};

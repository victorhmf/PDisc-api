/* eslint-disable import/prefer-default-export */
export const sanitizeErrors = (errors) => {
  const sanitizedErrors = errors.map((error) => {
    const objMessages = {};
    objMessages[error.path] = error.message;

    return objMessages;
  }).reduce((newObj, currentObj) => ({ ...newObj, ...currentObj }));

  return sanitizedErrors;
};

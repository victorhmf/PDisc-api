/* eslint-disable import/prefer-default-export */
export const sanitizeErrors = (errors) => {
  const sanitizedErrors = errors.map((error) => error.message);
  return sanitizedErrors;
};

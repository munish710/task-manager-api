class CustomAPIError extends Error {
  constructor(error, statusCode) {
    super(error);
    this.statusCode = statusCode;
  }
}

const createCustomError = (err, statusCode) => {
  return new CustomAPIError(err, statusCode);
};

module.exports = { CustomAPIError, createCustomError };

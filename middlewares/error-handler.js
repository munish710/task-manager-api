const { CustomAPIError } = require("../errors/custom-error");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err });
  }
  return res.status(500).json({ msg: err });
};

module.exports = errorHandler;

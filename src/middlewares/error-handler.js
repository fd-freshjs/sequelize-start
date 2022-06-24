module.exports.handleErrorMW = async (error, req, res, next) => {
  console.log(error);
  res.status(error.code).send({ errors: [error.message] });
};

module.exports.handleErrorMW = async (error, req, res, next) => {
  console.log('Error handler recieved error:', error.message);

  if (error.statusCode) {
    res.status(error.statusCode).send({ errors: [error.message] });
    return;
  }
  res.status(500).send({ errors: [error.message] });
};

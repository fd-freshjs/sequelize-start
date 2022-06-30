module.exports.createOrderMW = async (req, res, next) => {
  try {
    const data = req.body;

    // check body fields
    // throw createHttpError(400, 'Invalid order data');

    next();
  } catch (error) {
    next(error);
  }
}
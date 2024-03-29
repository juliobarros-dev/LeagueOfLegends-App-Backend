const errorHandler = (err, _req, res, _next) => {
  const { error: { status, message } } = err;

  return res.status(status).json(message);
};

module.exports = {
  errorHandler,
};

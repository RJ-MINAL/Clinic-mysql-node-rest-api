function JsonError(res, status, message) {
  return res.status(status).json({
    info: {
      type: 'error',
      message
    },
    responseContent: null
  });
}

function JsonSuccess(res, title, body, message) {
  let resContent = {};
  resContent[title] = { ...body };

  return res.status(200).json({
    info: {
      type: 'success',
      message
    },
    responseContent: resContent
  });
}

function CustomError(code, message, retornedError) {
  let err = new Error(message);
  err.status = code;
  err.retornedError = retornedError;

  return err;
}

exports.JsonError = JsonError;
exports.JsonSuccess = JsonSuccess;
exports.CustomError = CustomError;

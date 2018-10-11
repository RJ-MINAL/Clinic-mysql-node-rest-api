function JsonError(res, status, message, err) {
  if (err) console.log(err);

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

  if (body.constructor === Array) resContent[title] = body;
  else resContent[title] = { ...body };

  return res.status(200).json({
    info: {
      type: 'success',
      message
    },
    responseContent: resContent
  });
}

function SetError(code, message, dbError) {
  if (dbError) {
    dbError.message = message;
    dbError.status = code;
    return dbError;
  }

  let err = new Error(message);
  err.message = message;
  err.status = code;

  return err;
}

exports.JsonError = JsonError;
exports.JsonSuccess = JsonSuccess;
exports.SetError = SetError;

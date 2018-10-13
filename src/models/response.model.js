function JsonError(res, status, message, err) {
  if (err && err.sqlMessage) {
    console.log('<DB ERROR>', err);
    message = err.sqlMessage;
  }

  return res.status(status).json({
    info: {
      success: false,
      type: 'error',
      status
    },
    error: {
      description: message
    },
    responseContent: null
  });
}

function JsonSuccess(res, title, body, message) {
  const resContent = {};

  if (body.constructor === Array) resContent[title] = body;
  else resContent[title] = { ...body };

  if (!message) message = 'OK';
  return res.status(200).json({
    info: {
      success: true,
      type: 'success',
      status: 200,
      message
    },
    responseContent: resContent
  });
}

function Success(res, message) {
  if (!message) message = 'OK';
  return res.status(204).json({
    info: {
      success: true,
      type: 'success',
      status: 204,
      message
    },
    data: null
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
exports.Success = Success;
exports.SetError = SetError;

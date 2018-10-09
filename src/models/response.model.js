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

exports.JsonError = JsonError;
exports.JsonSuccess = JsonSuccess;

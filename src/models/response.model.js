function JsonError(res, status, message) {
  return res.status(status).json({
    info: {
      type: 'error',
      message
    },
    responseContent: null
  });
}

function InsertSuccess(res, title, body) {
  return res.status(200).json({
    info: {
      type: 'success',
      message: `${title} creado exitosamente `
    },
    responseContent: {
      title: {
        ...body
      }
    }
  });
}

exports.JsonError = JsonError;
exports.InsertSuccess = InsertSuccess;

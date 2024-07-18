import ERROR_CODES from "app/src-ssr/constants/errorCodes";

module.exports = (req, res, next) => {
  res.success = (data = {}, additionalInfo = {}) => {
    return res.status(200).json({
      success: true,
      data,
      ...additionalInfo,
    });
  };

  res.error = (
    errorCode = ERROR_CODES.UNEXPECTED_ERROR,
    errorMessage,
    additionalInfo = {},
  ) => {
    return res.status(400).json({
      success: false,
      errorCode,
      errorMessage,
      ...additionalInfo,
    });
  };

  next();
};

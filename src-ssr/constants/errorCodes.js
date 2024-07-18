// Error codes for the application
// 1000 - Unexpected error
// 1001 - User not found
// 1002 - Incorrect password
// 1003 - User is not verified
// 1004 - User already exists
// 1005 - Internal server error

const ERROR_CODES = {
  UNEXPECTED_ERROR: 1000,
  USER_NOT_FOUND: 1001,
  INCORRECT_PASSWORD: 1002,
  USER_NOT_VERIFIED: 1003,
  USER_ALREADY_EXISTS: 1004,
  INTERNAL_SERVER_ERROR: 1005,
  CREDENTIALS_REQUIRED: 1006,
  INVALID_EMAIL_FORMAT: 1007,
  PASSWORD_TOO_SHORT: 1008,
  UNAUTHORIZED: 1009,
  NOT_FOUND: 1010,
  TOO_MANY_ATTEMPTS: 1011,
};

export default ERROR_CODES;

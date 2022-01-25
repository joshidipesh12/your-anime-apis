export const HTTPCODES = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  APP_ERROR: 500,
  NOT_FOUND: 404,
  ALREADY_VERIFIED: 409,
  OTP_INVALID: 401,
  OTP_EXPIRED: 498,
};

export const emailRegx =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const MESSAGES = {
  INVALID_USER: 'Invalid user details',
  INVALID_NUMBER: 'Please provide valid phone number',
  INVALID_PARAMS: 'Please provide valid params',
  SUCCESSFULLY_CREATED: 'Successfully created',
  SUCCESSFULLY_DELETED: 'Successfully deleted',
  SUCCESSFULLY_UPDATED: 'Successfully updated',
  USER_SUSPENDED: 'User Suspended successfully;',
  USER_EXIST: 'User already exist',
  RESOURCE_NOT_FOUND: 'Request resource not found',
  RESOURCE_CREATION_FAILED:
    'Unable to create resource at this time, Please retry',
  NO_VALID_USER: 'No Such User Exists',
  RESOURCE_ALREADY_VERIFIED: 'The code has already been verified',
  OTP_EXPIRED: 'OTP code is already expired',
  OTP_INVALID: 'Invlaid OTP ',
  UNKNOWN_ERR: 'Unknown Error',
  EMAIL_USERNAME_ERR: 'Either EmailID or UserName Already Exists',
  PHONE_NUMBER_ERR: 'Phone Number Already Exists',
};

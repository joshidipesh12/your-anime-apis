export const HTTPCODES = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  APP_ERROR: 500,
  NOT_FOUND: 404,
};

export const emailRegx =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const MESSAGES = {
  INVALID_PARAMS: 'Please provide valid params',
  RESOURCE_NOT_FOUND: 'Request resource not found',
  RESOURCE_CREATION_FAILED:
    'Unable to create resource at this time, Please retry',
  SERVER_ERROR: 'Server Error',
};

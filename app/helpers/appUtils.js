import {v4 as uuidv4} from 'uuid';
import {emailRegx} from './index.js';

export const ResponseSuccess = (res, data, code) => {
  return res.status(code).json({status: true, data: data});
};

export const ResponseFailure = (res, msg, code) => {
  return res.status(code).json({status: false, data: {errorString: msg}});
};

export const emailValidator = email => {
  if (!email) return false;
  else {
    return emailRegx.test(email.toLowerCase());
  }
};

export const getEmailIds = txt => {
  const matches =
    txt.match(/(^|@)([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) || [];
  return matches.map(match => match.substr(1));
};

export const sqlParse = record => {
  return JSON.parse(JSON.stringify(record));
};

export const randomNumber = () => {
  return Math.floor(Math.random() * Math.pow(10, 5));
};

export const newUUID = () => {
  return Promise.resolve(uuidv4());
};

export const extractNumberAndString = txt => {
  return txt.replace(/[^a-zA-Z0-9]/g, '');
};

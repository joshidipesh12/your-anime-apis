import {Router} from 'express';
import path from 'path';
import {
  ResponseSuccess,
  ResponseFailure,
  MESSAGES,
  HTTPCODES,
} from '../../helpers/index.js';
import {TestHandler} from './testHandler.js';

export class TestRoute {
  #handler;
  constructor() {
    this.route = Router();
    this.#handler = new TestHandler();
    this.#init();
  }

  #init() {
    this.route.get('/', this.#testHi.bind(this));
  }

  #testHi(req, res, next) {
    this.#handler.sayHi().then(result => {
      if (result) {
        return res
          .status(HTTPCODES.SUCCESS)
          .sendFile(path.join(path.resolve(), 'public', 'test-image-1.png'));
      } else {
        return ResponseFailure(
          res,
          MESSAGES.INVALID_PARAMS,
          HTTPCODES.APP_ERROR,
        );
      }
    }, next);
    // from this.#handler.method().then((result) => {return 👇}, next)
    // if (wrong_data) ResponseFailure(res, MESSAGES.INVALID_USER, 401);
    // return ResponseSuccess(res, {user: 'random-User'}, 200);
  }
}

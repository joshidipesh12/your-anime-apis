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
    this.route.get('/file', this.#getFile.bind(this));
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

  #getFile(req, res, next) {
    // const name = req.params.name;
    this.#handler
      .getFileByName('')
      .then(result => {
        // console.log({result});
        // .set('Content-Type', 'image/png')
        return res
          .status(HTTPCODES.SUCCESS)
          .redirect(`https://drive.google.com/uc?id=${result}&alt=media`);
        // return ResponseSuccess(res, result, HTTPCODES.SUCCESS)
      }, next)
      .catch(error => {
        console.log({error});
        return ResponseFailure(res, MESSAGES.UNKNOWN_ERR, HTTPCODES.APP_ERROR);
      });
  }
}

import {Router} from 'express';
import {
  ResponseSuccess,
  ResponseFailure,
  MESSAGES,
  HTTPCODES,
} from '../../helpers/index.js';
import {YourAvatarHandler} from './YourAvatarHandler.js';
import path from 'path';
const __dirname = path.resolve();

export class YourAvatarRoute {
  #handler;
  constructor() {
    this.route = Router();
    this.#handler = new YourAvatarHandler();
    this.#init();
  }

  #init() {
    this.route.get('/', this.#renderPage.bind(this));
  }

  #renderPage(req, res, next) {
    res.status(HTTPCODES.SUCCESS).render(path.join('yourAvatar', 'index'));
  }
}

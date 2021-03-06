import {Router} from 'express';
import {
  ResponseSuccess,
  ResponseImage,
  ResponseFailure,
  MESSAGES,
  HTTPCODES,
} from '../../helpers/index.js';
import {AvatarHandler} from './AvatarHandler.js';

export class AvatarRoute {
  #handler;
  constructor() {
    this.route = Router();
    this.#handler = new AvatarHandler();
    this.#init();
  }

  #init() {
    this.route.get('/', this.#getAvatar.bind(this));
  }

  #getAvatar(req, res, next) {
    let {seed = ''} = req.query ?? {};
    this.#handler.generateAvatar(seed).then(image => {
      if (image.length) {
        return res
          .status(HTTPCODES.SUCCESS)
          .redirect(`https://drive.google.com/uc?id=${image}&alt=media`);
      } else {
        return ResponseFailure(
          res,
          MESSAGES.INVALID_PARAMS,
          HTTPCODES.APP_ERROR,
        );
      }
    }, next);
  }
}

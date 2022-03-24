import {Router} from 'express';
import multer from 'multer';
import {
  ResponseSuccess,
  ResponseFailure,
  ResponseImage,
  MESSAGES,
  HTTPCODES,
} from '../../helpers/index.js';
import {YourAvatarHandler} from './YourAvatarHandler.js';
import path from 'path';
const __dirname = path.resolve();

export class YourAvatarRoute {
  #handler;
  #upload;
  constructor() {
    this.route = Router();
    this.#handler = new YourAvatarHandler();
    this.#upload = multer({dest: 'public/uploads'});
    this.#init();
  }

  #init() {
    this.route.get('/', this.#renderPage.bind(this));
    this.route.post(
      '/',
      this.#upload.single('userImg'),
      this.#generateAvatar.bind(this),
    );
  }

  #renderPage(req, res, next) {
    res.status(HTTPCODES.SUCCESS).render(path.join('yourAvatar', 'index'));
  }

  #generateAvatar(req, res, next) {
    // req.file: the actual file, in memory.
    // to save file, set this.#upload to dest: "public/uploads" above.
    if (req.file) {
      // generate user avatar in handler using model
      this.#handler.generateAvatar(req.file.filename).then(result => {
        if (result) {
          return res
            .status(HTTPCODES.SUCCESS)
            .send(`https://drive.google.com/uc?id=${result}&alt=media`);
        } else {
          return ResponseFailure(res, MESSAGES.SERVER_ERROR, HTTPCODES.SUCCESS);
        }
      }, next);
    } else {
      return ResponseFailure(res, MESSAGES.INVALID_PARAMS, HTTPCODES.APP_ERROR);
    }
  }
}

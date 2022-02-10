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
    this.#upload = multer({
      dest: 'public/uploads',
      preservePath: true,
      storage: multer.memoryStorage(),
    });
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
      this.#handler.generateAvatar(req.file).then(result => {
        if (result?.data) {
          // send image using:
          return ResponseImage(
            res,
            result.data,
            HTTPCODES.SUCCESS,
            result.mimeType,
          );
        } else {
          // typical
          // return ResponseSuccess(res, <data_here>, HTTPCODES.SUCCESS)
          return ResponseFailure(res, MESSAGES.SERVER_ERROR, HTTPCODES.SUCCESS);
        }
      }, next);
    } else {
      return ResponseFailure(res, MESSAGES.INVALID_PARAMS, HTTPCODES.APP_ERROR);
    }
  }
}

import dotenv from 'dotenv';
dotenv.config();

import {Router} from 'express';

import {ResponseSuccess} from '../helpers/index.js';
import {AvatarRoute} from './avatar/AvatarRoute.js';
import {YourAvatarRoute} from './your/YourAvatarRoute.js';

export class InitRoutersV1 {
  #avatarRoute;
  #yourAvatarRoute;
  constructor() {
    this.rest = Router();
    this.#avatarRoute = new AvatarRoute();
    this.#yourAvatarRoute = new YourAvatarRoute();
    this.#init();
  }

  #init() {
    this.rest.get('/info', this.#serverInfo.bind(this));
    this.rest.use('/avatar', this.#avatarRoute.route);
    this.rest.use('/yourAvatar', this.#yourAvatarRoute.route);
    // other simple or nested routes here
  }

  #serverInfo(req, res, next) {
    const serverInfo = {
      nodeENV: process.env.NODE_ENV,
      port: process.env.PORT,
      name: 'Anime APIs Server',
    };
    return ResponseSuccess(res, serverInfo, 200);
  }
}

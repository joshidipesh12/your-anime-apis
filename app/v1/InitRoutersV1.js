import dotenv from 'dotenv';
dotenv.config();

import {Router} from 'express';

import {ResponseSuccess} from '../helpers/index.js';
// import {TestRoute} from './test/testRoute.js';
import {AvatarRoute} from './avatar/AvatarRoute.js';

export class InitRoutersV1 {
  // #testRoute;
  #avatarRoute;
  constructor() {
    this.rest = Router();
    // this.#testRoute = new TestRoute();
    this.#avatarRoute = new AvatarRoute();
    this.#init();
  }

  #init() {
    this.rest.get('/info', this.#serverInfo.bind(this));
    // this.rest.use('/test', this.#testRoute.route);
    this.rest.use('/avatar', this.#avatarRoute.route);
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

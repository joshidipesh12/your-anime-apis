import dotenv from 'dotenv';
dotenv.config();

import {Router} from 'express';

import {ResponseSuccess} from '../helpers/index.js';
import {TestRoute} from './test/testRoute.js';

export class InitRoutersV1 {
  #testRoute;
  constructor() {
    this.rest = Router();
    this.#testRoute = new TestRoute();
    this.#init();
  }

  #init() {
    this.rest.get('/info', this.#serverInfo.bind(this));
    this.rest.use('/test', this.#testRoute.route);
    // other simple or nested routes here
  }

  #serverInfo(req, res, next) {
    const serverInfo = {
      nodeENV: process.env.NODE_ENV,
      name: 'Anime APIs Server',
    };
    return ResponseSuccess(res, serverInfo, 200);
  }
}

import {BaseDataProvider} from '../baseDataProvider.js';
// import {google} from 'googleapis';
// import gen from 'random-seed';

export class YourAvatarHandler extends BaseDataProvider {
  constructor() {
    super();
  }

  // payload is the image file data
  // use payload.buffer for processing avatar
  async generateAvatar(payload) {
    // actual processing here
    // return avatar data as promise
    return null;
  }
}

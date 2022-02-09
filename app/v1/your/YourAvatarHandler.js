import {BaseDataProvider} from '../baseDataProvider.js';

export class YourAvatarHandler extends BaseDataProvider {
  constructor() {
    super();
  }

  // payload is the image file data
  // use payload.buffer for processing avatar
  // use fs module to handle the payload file stores in folder "public/uploads"
  // remember to delete the image after processing
  async generateAvatar(payload) {
    // actual processing here
    // return avatar data as promise
    let prom = new Promise((res, rej) => {
      setTimeout(() => {
        res({data: payload.buffer, mimeType: payload.mimeType});
      }, 5000);
    });
    return prom;
  }
}

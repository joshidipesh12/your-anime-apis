import {BaseDataProvider} from '../baseDataProvider.js';
import {google} from 'googleapis';
import gen from 'random-seed';
import {Buffer} from 'buffer';

export class AvatarHandler extends BaseDataProvider {
  constructor() {
    super();
  }

  async generateAvatar(seed) {
    // setting up drive
    const drive = google.drive({
      version: 'v3',
      auth: this.googleClient,
    });

    // generating seed
    if (!seed?.length) seed = Date.now().toString();
    let rand = gen.create(`${seed}`);

    const total = 21552;
    // generating file number from given seed
    let fileNum = rand(total); // harded coded for now

    // looping in case of error
    let response;
    do {
      // search file with query
      const q = `name='anime_avatar (${(fileNum++ % total) + 1}).png'`;
      // getting response
      response = await drive.files.list({q});
    } while (response.data.files.length === 0);

    drive.permissions.create({
      fileId: response.data.files[0].id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    this.hitCounter();

    return response.data.files[0].id;
  }
}

const abToBuffer = ab => {
  const buf = Buffer.alloc(ab.byteLength);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    buf[i] = view[i];
  }
  return buf;
};

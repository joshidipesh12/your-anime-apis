import {BaseDataProvider} from '../baseDataProvider.js';
import {google} from 'googleapis';

export class YourAvatarHandler extends BaseDataProvider {
  constructor() {
    super();
  }

  // payload is the image file data
  // use payload.buffer for processing avatar
  // use fs module to handle the payload file stores in folder "public/uploads"
  // remember to delete the image after processing
  async generateAvatar(payload) {
    // setting up drive
    const drive = google.drive({
      version: 'v3',
      auth: this.googleClient,
    });

    let image = new Promise(async (resolve, reject) => {
      // looping in case of error
      let response;
      do {
        // search file with query
        const q = `name='13307_result.jpg'`;
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
      resolve(response.data.files[0].id);
    });

    return image;
  }
}

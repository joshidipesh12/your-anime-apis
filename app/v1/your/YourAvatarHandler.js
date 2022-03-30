import {BaseDataProvider} from '../baseDataProvider.js';
import {google} from 'googleapis';
import fs from 'fs/promises';
import {spawn, spawnSync} from 'child_process';
import path from 'path';
const __dirname = path.resolve();

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
      let flushTimeout;
      const python = spawn('python3', [
        path.join(__dirname, 'app/v1/your/predictor/predict.py'),
        path.join(__dirname, payload.path),
      ]);
      python.stdout.on('data', async data => {
        let imageName = data.toString();
        console.log('Result: ', imageName);
        // search file with query
        const q = `name='${imageName}'`;
        // getting response
        let response = await drive.files.list({q});

        if (response.data.files.length === 0) {
          flush();
          clearTimeout(flushTimeout);
          return resolve('1ZH_5SnSk5bA9NDkDWwo1a6HVzPuSVSg8');
        }

        await drive.permissions.create({
          fileId: response.data.files[0].id,
          requestBody: {
            role: 'reader',
            type: 'anyone',
          },
        });

        flush();
        clearTimeout(flushTimeout);
        return resolve(response.data.files[0].id);
      });

      flushTimeout = setTimeout(() => {
        flush();
        return resolve('1AqNPutModtyxqRgqwuGm1kUmRFNpIrBm');
      }, 15000);

      const flush = () => {
        this.hitCounter();
        fs.unlink(path.join(__dirname, payload.path)).catch(err => {});
      };
    });

    return image;
  }
}

import {BaseDataProvider} from '../baseDataProvider.js';
import {google} from 'googleapis';

export class TestHandler extends BaseDataProvider {
  async sayHi(req, res) {
    return '<h1>hello world! this is a test route</h1>';
    // return {message: 'hello world this is a test route'};
  }

  async getFileByName(name) {
    const oauth2client = new google.auth.OAuth2({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_KEY,
      redirectUri: `https://developers.google.com/oauthplayground`,
    });

    oauth2client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

    const drive = google.drive({
      version: 'v3',
      auth: oauth2client,
    });

    const response = await drive.files.list({
      q: `name=anime_avatar (${0})`,
    });

    console.log(response.data.files[0]);

    const fileId = response.data.files.find(
      item => item.name.startsWith('test_2') && item.mimeType === 'image/png',
    ).id;

    // await drive.permissions.create({
    //   fileId,
    //   requestBody: {
    //     role: 'reader',
    //     type: 'anyone',
    //   },
    // });

    return fileId;
  }
}

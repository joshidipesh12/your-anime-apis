import {google} from 'googleapis';
import {hitCounter} from '../helpers/index.js';

export class BaseDataProvider {
  constructor() {
    this.googleClient = new google.auth.OAuth2({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_KEY,
      redirectUri: `https://developers.google.com/oauthplayground`,
    });
    this.googleClient.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });
    this.hitCounter = hitCounter;
  }
}

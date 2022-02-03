import {BaseDataProvider} from '../baseDataProvider.js';
// import {google} from 'googleapis';
// import gen from 'random-seed';

export class YourAvatarHandler extends BaseDataProvider {
  constructor() {
    super();
  }

  async generateAvatar(seed) {
    //     // setting up drive
    //     const drive = google.drive({
    //       version: 'v3',
    //       auth: this.googleClient,
    //     });
    //     // generating seed
    //     if (!seed?.length) seed = Date.now().toString();
    //     let rand = gen.create(`${seed}`);
    //     const total = 21552;
    //     // generating file number from given seed
    //     let fileNum = rand(total); // harded coded for now
    //     // looping in case of error
    //     let response;
    //     do {
    //       // search file with query
    //       const q = `name='anime_avatar (${(fileNum++ % total) + 1}).png'`;
    //       // getting response
    //       response = await drive.files.list({q});
    //     } while (response.data.files.length === 0);
    //     await drive.permissions.create({
    //       fileId: response.data.files[0].id,
    //       requestBody: {
    //         role: 'reader',
    //         type: 'anyone',
    //       },
    //     });
    //     this.hitCounter();
    //     // return fileId as result
    //     return response.data.files[0].id;
    //   }
    //   async generateAvatarTest(seed) {
    //     // setting up drive
    //     const drive = google.drive({
    //       version: 'v3',
    //       auth: this.googleClient,
    //     });
    //     // generating seed
    //     if (!seed?.length) seed = Date.now().toString();
    //     let rand = gen.create(`${seed}`);
    //     const total = 21552;
    //     // generating file number from given seed
    //     let fileNum = rand(total); // harded coded for now
    //     // looping in case of error
    //     let response;
    //     do {
    //       // search file with query
    //       const q = `name='anime_avatar (${(fileNum++ % total) + 1}).png'`;
    //       // getting response
    //       response = await drive.files.list({q});
    //     } while (response.data.files.length === 0);
    //     const imgData = await drive.files.get({
    //       fileId: response.data.files[0].id,
    //       alt: 'media',
    //     });
    //     // return fileId as result
    //     return imgData;
  }
}

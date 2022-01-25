import {BaseDataProvider} from '../baseDataProvider.js';

export class TestHandler extends BaseDataProvider {
  async sayHi(req, res) {
    return '<h1>hello world! this is a test route</h1>';
    // return {message: 'hello world this is a test route'};
  }
}

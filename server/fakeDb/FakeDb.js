const User = require('../database/models/user');
const Admin = require('../database/models/admin');


class FakeDb {

  async clean() {
    await User.deleteMany({});
    await Admin.deleteMany({});
  }

  async addData() {
    await User.create();
    await Admin.create();
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDb();

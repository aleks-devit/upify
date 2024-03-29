


class BaseModel {

  constructor(model, user = null, admin = null) {
    this.Model = model;
    this.user = user;
    this.admin = admin
  }

  async getRandoms(limit) {
    const count = await this.Model.countDocuments();
    let randomIndex;

    if (limit > count) {
      randomIndex = 0
    } else {
      randomIndex = count - limit;
    }

    const random = Math.round(Math.random() * randomIndex);
    return () => this.Model.find({}).skip(random).limit(limit);
  }
}

module.exports = BaseModel;

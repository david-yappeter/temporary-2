const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "user_id";
  }

  static get relationMappings() {}

  static async GetAll() {
    return this.query();
  }

  static async Create(data) {
    return this.query().insert(data);
  }

  static async Update(data) {
    return this.query()
      .where({
        user_id: data.user_id,
      })
      .update(data);
  }
}

module.exports = {
  default: User,
  User,
};

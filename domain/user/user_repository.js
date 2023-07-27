const user = require("./user_entity");
const uuid = require("uuid");
class UserRepository {
  async createUser(payload) {
    try {
      const newUser = new user({
        id: uuid.v4(),
        fullname: payload.fullname,
        email: payload.email,
        password: payload.password,
      });

      return await newUser.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;

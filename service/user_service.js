const UserRepository = require("../domain/user/user_repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(user) {
    try {
      return await this.userRepository.createUser(user);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;

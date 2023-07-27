const UserService = require("../service/user_service");

exports.createUser = async (req, res) => {
  try {
    const { fullname, email, password, username } = req.body;

    const userService = new UserService();
    const user = await userService.createUser({
      fullname,
      email,
      password,
      username,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// userService.js
import UserModel from '../models/userModel.js';

const userService = {
  async getAllUsers() {
    return await UserModel.find();
  },

  async getUserById(userId) {
    return await UserModel.findById(userId);
  },
};

export default userService;

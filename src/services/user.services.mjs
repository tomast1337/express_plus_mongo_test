import User from "../models/user.model.mjs";

export default class UserService {
  static async createUser(user) {
    const newUser = new User(user);
    return await newUser.save();
  }

  static async updateUser(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  static async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }

  static async getUser(id) {
    return await User.findById(id);
  }

  static async getUsers(page, limit) {
    return await User.find()
      .skip(page * limit)
      .limit(limit)
      .sort({ created_at: -1 });
  }
}

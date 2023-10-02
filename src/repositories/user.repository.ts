import { User } from "../models/User.model";
import { IUser } from "../types/user.type";

class UserRepository {
  public async getAll(): Promise<IUser[]> {
    const users = userRepository.getAll();
    return users;
  }
  public async findById(id: string): Promise<IUser> {
    return await User.findById(id);
  }
}

export const userRepository = new UserRepository();

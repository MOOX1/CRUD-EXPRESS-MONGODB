import { IGetUsersRepository } from "../controllers/get-users/protocols";
import { IUser } from "../models/IUser";
import User from "../models/UsersSchema/UsersSchema";

export class GetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
    // const users = User.find();
    return [
      {
        name: "vitor",
        lastname: "meneses",
        email: "teste2@teste.com",
        password: "123",
      },
    ];
  }
}

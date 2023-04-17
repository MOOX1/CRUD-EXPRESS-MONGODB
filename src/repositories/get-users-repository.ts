import { IGetUsersRepository } from "../controllers/get-users/protocols";
import { IUser } from "../models/IUser";

export class GetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
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

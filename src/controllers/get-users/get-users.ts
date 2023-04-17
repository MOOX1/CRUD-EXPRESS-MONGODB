import { Request, Response } from "express";
import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}
  async handle(req: Request, res: Response) {
    try {
      const users = await this.getUsersRepository.getUsers();

      return {
        status: 200,
        body: users,
      };
    } catch (error) {
      return {
        status: 500,
        body: error,
      };
    }
  }
}

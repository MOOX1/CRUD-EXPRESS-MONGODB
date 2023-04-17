import { IUser } from "../../models/IUser";
import { IHttpResponse } from "../protocols";
import { Response, Request } from "express";

export interface IGetUsersController {
  handle(req: Request, res: Response<IUser[]>): Promise<IHttpResponse<IUser>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<IUser[]>;
}

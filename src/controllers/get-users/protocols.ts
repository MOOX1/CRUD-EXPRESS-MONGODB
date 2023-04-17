import { IUser } from "../../models/IUser";
import { IHttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<IHttpResponse<IUser>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<IUser[]>;
}

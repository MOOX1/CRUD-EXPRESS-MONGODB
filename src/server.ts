import { GetUsersRepository } from "./repositories/get-users-repository";
import express from "express";
import dotenv from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";

dotenv.config();

const app = express();

app.get("/users", async (req, res) => {
  const getUsersRepository = new GetUsersRepository();
  const getUsersController = new GetUsersController(getUsersRepository);

  const { body, status } = await getUsersController.handle();

  res.json(body).send(status);
});

app.listen(process.env.PORT || 8000, () => console.log("server is on"));

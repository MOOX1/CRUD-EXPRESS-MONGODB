import { GetUsersRepository } from "./repositories/get-users-repository";
import express from "express";
import dotenv from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";
import mongoClient from "./database/mongo";

const main = () => {
  mongoClient.connect();

  dotenv.config();

  const app = express();

  app.get("/users", async (req, res) => {
    const getUsersRepository = new GetUsersRepository();
    const getUsersController = new GetUsersController(getUsersRepository);

    const { body, status } = await getUsersController.handle(req, res);
    res.status(status).json(body);
  });

  app.listen(process.env.PORT || 8000, () => console.log("server is on"));
};

main();

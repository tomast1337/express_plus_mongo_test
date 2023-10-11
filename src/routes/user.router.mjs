import express  from "express";
import UserService from "../services/user.services.mjs";
const UserRouter = express.Router();

UserRouter.get("/", (req, res) => {
  const { page, limit } = req.query;
  const users = UserService.getUsers(page, limit);
  res.json(users);
});

UserRouter.post("/", (req, res) => {
  const user = UserService.createUser(req.body);
  res.json(user);
});

UserRouter.put("/", (req, res) => {
  const user = UserService.updateUser(req.body);
  res.json(user);
});

UserRouter.delete("/", (req, res) => {
  const user = UserService.deleteUser(req.body);
  res.json(user);
});

export { UserRouter };

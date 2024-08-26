import express from "express";
import {
  CreateUser,
  DeleteUser,
  GetUser,
  UpdateUser,
} from "../controller/userControler.js";
import { userValidationRules,validate } from "../ErroHandling/validators.js";

const routers = express.Router();

routers.post("/create", userValidationRules, validate, CreateUser);
routers.get("/read", GetUser);
routers.put("/update/:id", userValidationRules, validate, UpdateUser);
routers.delete("/delete/:id", DeleteUser);

export default routers;

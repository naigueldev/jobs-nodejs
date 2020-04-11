import "dotenv/config";
import express from "express";
import UserController from "./app/controllers/UserController";
import bugsnag from "@bugsnag/js";
import bugsnagExpress from "@bugsnag/plugin-express";
const bugsnagClient = bugsnag(process.env.BUGSNAG_API_KEY);

bugsnagClient.use(bugsnagExpress);

const middleware = bugsnagClient.getPlugin("express");

const app = express();

app.use(middleware.requestHandler);

app.use(middleware.errorHandler);

app.use(express.json());

app.post("/users", UserController.store);
app.get("/users", (req, res) => {
  res.json("testing");
});

app.listen(3333, () => {
  console.log("Server is running");
});

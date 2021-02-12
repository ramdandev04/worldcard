import express from "express";
const Controller = require("./Controller");

const route = express.Router();

route.get("/", Controller.Home);

export default route;

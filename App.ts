import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import route from "./Route";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("*", route);

export default app;

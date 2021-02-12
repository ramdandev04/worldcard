import http from "http";
import app from "./App";
http
  .createServer(app)
  .listen(3000)
  .on("listening", () => {
    console.log("server started");
  });

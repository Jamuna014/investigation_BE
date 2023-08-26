import express, { json } from "express";
import cors from "cors";
import dbService from "./src/database/db.js";
import ENV from "./src/config/config.js";
const port = ENV.PORT || 8000;
const app = express();
app.use(json());
app.use(cors());


dbService.connect((err) => {
  if (err) {
    console.log("error while connecting to db", err);
    process.exit(0);
  }

  app.listen(port, async () => {
    console.log("server running in port : " + port);
  });
});

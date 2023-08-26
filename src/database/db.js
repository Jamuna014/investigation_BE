import pg from "pg";
import ENV from "../config/config.js";

const config = {
  user: ENV.PGUSER,
  host: ENV.PGHOST,
  database: ENV.PGDATABASE,
  password: ENV.PGPASSWORD,
  port: ENV.PGPORT,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
};
const dbService = {
  db: undefined,
  connect: (callback) => {
    const client = new pg.Client(config);
    client.connect(function (err, service) {
      if (err) {
        callback(err);
      }
      dbService.db = service;
      callback(null);
    });
  },
};

export default dbService;

import dotenv from "dotenv";
import lodash from "lodash";
let ENV = {};
try {
  ENV = dotenv.config({ path: `${process.env.APP_ENV}.env` }).parsed;
  if (lodash.isEmpty(ENV)) {
    console.error("FILE .env NEED TO BE CONFIGURED");
    process.exit(0);
  }
} catch (err) {
  console.error("~FILE .env NEED TO BE CONFIGURED~");
  process.exit(0);
}

const STATUS_CODE = {
  success: 200,
  created: 201,
  updated: 202,
  noContent: 203,
  empty: 204,
  multiStatus: 207,
  badRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  notFound: 404,
  conflict: 409,
  preconditionFailed: 412,
  internalServerError: 500,
};

const RESPONSE_CODE = {
  VALID: 1,
  IN_VALID: 0,
};

export { STATUS_CODE, RESPONSE_CODE };

export default ENV;

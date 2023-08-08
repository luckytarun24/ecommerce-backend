import dotenv from "dotenv";

dotenv.config();

export default {
  dbUri: process.env.DATABASE_URL,
  salt: process.env.SECURITY_SALT,
  secret: process.env.TOKEN_SECRET,
  dateOfDelivery: process.env.DATE_OF_DELIVERY,
};

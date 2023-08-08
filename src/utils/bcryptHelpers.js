import { config } from "dotenv";
import bcrypt from "bcryptjs";

const generateHash = async (password) => {
  const salt = await bcrypt.genSalt(Number(config.salt));
  const hasPassword = await bcrypt.hash(password, salt);
  return hasPassword;
};

const comparePassword = async (password, hashPassword) =>
  await bcrypt.compare(password, hashPassword);

export { generateHash, comparePassword };

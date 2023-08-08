import { verifyJwt } from "./jwt.js";

const middlewareVerifyToken = async (request, response, next) => {
  try {
    let token = request.headers?.authorization;
    if (!token)
      return response.status(401).send("Access Denied / Unauthorized request");
    token = token.split(" ")[1]; // Remove Bearer from string
    if (token === "null" || !token)
      return res.status(401).send("Unauthorized request");
    let verifiedUser = verifyJwt(token);
    if (!verifiedUser) return response.status(401).send("Unauthorized request");
    request.user = verifiedUser;
    next();
  } catch (error) {
    return response.status(400).send("Invalid Token");
  }
};
export { middlewareVerifyToken };

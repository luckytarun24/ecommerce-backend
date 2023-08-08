import User from "../../modals/user.js";
import { comparePassword } from "../../utils/bcryptHelpers.js";
import { createToken } from "../../utils/jwt.js";

const login = async (request, response) => {
  try {
    const userDetails = await User.find().or([
      { email: request.body.id },
      { mobileNo: Number(request.body.id) || 0 },
    ]);

    if (!userDetails || userDetails.length === 0) {
      return response.status(500).send({ error: "User not found" });
    }

    const { password, email, mobileNo, name, id } = userDetails[0];
    const isPasswordCorrect = await comparePassword(
      request.body.password,
      password
    );
    if (!isPasswordCorrect)
      return response
        .status(401)
        .send({ error: "Mobile/Email or Password is wrong" });
    const token = createToken({ id, email, mobileNo, name });
    return response
      .status(200)
      .send({ user: { id, email, mobileNo, name }, token });
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

export default login;

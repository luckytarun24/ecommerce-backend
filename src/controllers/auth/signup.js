import User from "../../modals/user.js";
import Cart from "../../modals/cart.js";

import { generateHash } from "../../utils/bcryptHelpers.js";

const signup = async (request, response) => {
  try {
    const password = await generateHash(request.body.password);
    const createUser = new User({
      name: request.body.name,
      password: password,
      mobileNo: request.body.mobileNo,
      email: request.body.email,
    });
    const result = await createUser.save();
    
    const createCart = new Cart({
      userId: result.id,
      productIds: [],
    });
    await createCart.save();

    return response.status(200).send({ id: result.id });
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

export default signup;

import Cart from "../../modals/cart.js";

const create = async (request, response) => {
  try {
    const { id } = request.user;

    const createCart = new Cart({
      userId: id,
      productIds: request.body.productIds,
    });
    const result = await createCart.save();
    return response.status(200).send({ id: result.id });
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

export default create;

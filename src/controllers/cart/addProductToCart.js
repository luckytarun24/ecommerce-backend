import Cart from "../../modals/cart.js";

const addProductToCart = async (request, response) => {
  try {
    const { id } = request.user;
    const productIds = request.body.productId;
    const result = await Cart.findOneAndUpdate(
      { userId: id },
      { $push: { productIds: productIds } },
      { upsert: true, new: true, runValidators: true }
    );
    if (!result) {
      return response.status(404).send({ message: "Not Found " });
    }
    return response.status(200).send({ message: "Updated Successfully" });
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

export default addProductToCart;

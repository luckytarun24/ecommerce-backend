import Cart from "../../modals/cart.js";

const removeProductFromCart = async (request, response) => {
  try {
    const { id } = request.user;
    const productId = request.body.productId;
    const result = await Cart.findOneAndUpdate(
      { userId: id },
      { $pull: { productIds: productId }, $slice: { interests: -1 } },
      { runValidators: true }
    );
    if (!result) {
      return response.status(404).send({ message: "Cart not found" });
    }
    return response.status(200).send({ message: "Updated Successfully" });
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

export default removeProductFromCart;

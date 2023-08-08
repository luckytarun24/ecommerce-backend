import Cart from "../../modals/cart.js";

const updateByCount = async (request, response) => {
  try {
    const { id } = request.user;
    const { productId, count } = request.body;
    await Cart.findOneAndUpdate(
      { userId: id },
      { $pull: { productIds: productId } },

      { runValidators: true }
    );
    const result = await Cart.findOneAndUpdate(
      { userId: id },
      { $push: { productIds: Array(count).fill(productId) } },

      { nwe: true, runValidators: true }
    );
    if (!result) {
      return response.status(404).send({ message: "Cart not found" });
    }
    return response.status(200).send({ message: "Updated Successfully" });
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

export default updateByCount;

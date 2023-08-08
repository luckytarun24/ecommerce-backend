import Cart from "../../modals/cart.js";

const getCartByIdAndDelete = async (request, response) => {
  try {
    const { id } = request.params;
    await Cart.findByIdAndRemove({ _id: id });
    return response.status(200).send({ message: "Deleted Successfully" });
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

export default getCartByIdAndDelete;

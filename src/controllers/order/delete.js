import Order from "../../modals/order.js";
const getOrderByIdAndDelete = async (request, response) => {
  try {
    const { id } = request.params;
    await Order.findByIdAndRemove({ _id: id });
    return response.status(200).send({ message: "Deleted Successfully" });
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

export default getOrderByIdAndDelete;

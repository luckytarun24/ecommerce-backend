import Order from "../../modals/order.js";
const getOrderByUser = async (request, response) => {
  try {
    const { id } = request.user;
    const result = await Order.find({ _id: id });
    return response.status(200).send(result);
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

export default getOrderByUser;

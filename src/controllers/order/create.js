import config from "../../../config.js";
import order from "../../modals/order.js";
const create = async (request, response) => {
  try {
    const createOrder = new order({
      userId: request.user.id,
      paymentMode: request.body.paymentMode,
      productsId: request.body.productsId,
      dateOfDelivery:
        new Date() + Number(config.dateOfDelivery) * 24 * 60 * 60 * 1000,
      address: request.body.address,
      status: request.body.status,
    });
    const result = await createOrder.save();
    return response.status(200).send({ id: result.id });
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

export default create;

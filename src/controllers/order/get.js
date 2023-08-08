import Order from "../../modals/order.js";
const getOrderById = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Order.findById(id);
        return response.status(200).send(result)
    } catch (error) {
        return response.status(500).send({ error: error.message })
    }
}

export default getOrderById;
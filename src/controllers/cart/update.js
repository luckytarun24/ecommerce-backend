import Cart from "../../modals/cart.js"

const getCartByIdAndUpdate = async (request, response) => {
    try {
        const { id } = request.params;
        const data = request.body;
        await Cart.findByIdAndUpdate({ "_id": id }, data, { runValidators: true });
        return response.status(200).send({ message: "Updated Successfully" })
    } catch (error) {
        return response.status(500).send({ error: error.message })
    }
}

export default getCartByIdAndUpdate;
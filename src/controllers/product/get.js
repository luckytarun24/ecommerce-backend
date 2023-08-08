import Product from "../../modals/product.js";
const getProductById = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Product.findById(id);
        return response.status(200).send(result)
    } catch (error) {
        return response.status(500).send({ error: error.message })
    }
}

export default getProductById;
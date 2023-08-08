import Product from "../../modals/product.js";
const getAllProducts = async (request, response) => {
    try {
      
        const result = await Product.find();
        return response.status(200).send(result)
    } catch (error) {
        return response.status(500).send({ error: error.message })
    }
}

export default getAllProducts;
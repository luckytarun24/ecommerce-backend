import Product from "../../modals/product.js"

const create = async (request, response) => {
    try {
        const createProduct = new Product({
            title: request.body.title,
            subTitle: request.body.subTitle,
            image: request.body.image,
            imageList: request.body.imageList,
            quantity: request.body.quantity,
            price: request.body.price,
            discount: request.body.discount,
            description: request.body.description,
            category: request.body.category

        })
        const result = await createProduct.save();
        return response.status(200).send({ id: result.id })
    } catch (error) {
        return response.status(500).send({ error: error.message })
    }
}

export default create;
import User from "../../modals/user.js"
const create = async (request, response) => {
    try {
        const createUser = new User({
            name: request.body.name,
            age: request.body.age,
            email: request.body.email
        })
        const result = await createUser.save();
        return response.status(200).send({ id: result.id })
    } catch (error) {
        return response.status(500).send({ error: error.message })
    }
}

export default create;
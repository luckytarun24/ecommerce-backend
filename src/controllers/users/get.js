import User from "../../modals/user.js"
const getUserById = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await User.findById({ "_id": id });
        return response.status(200).send(result)
    } catch (error) {
        return response.status(500).send({ error: error.message })
    }
}

export default getUserById;
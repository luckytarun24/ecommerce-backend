import User from "../../modals/user.js"
const getUserByIdAndDelete = async (request, response) => {
    try {
        const { id } = request.params;
        const data = request.body;
        await User.findByIdAndRemove({ "_id": id }, data);
        return response.status(200).send({ message: "Deleted Successfully" })
    } catch (error) {
        return response.status(500).send({ error: error.message })
    }
}

export default getUserByIdAndDelete;
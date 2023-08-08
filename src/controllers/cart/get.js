import mongoose from "mongoose";
import Cart from "../../modals/cart.js";

const getCartById = async (request, response) => {
  try {
    const { id } = request.user;
    const result = await Cart.find({ userId: id });
    return response.status(200).send(result);
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};

const getCartProductsByUserId = async (request, response) => {
  try {
    const { id } = request.user;

    const result = await Cart.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $unwind: {
          path: "$productIds",
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "productIds",
          foreignField: "_id",
          as: "products",
        },
      },
      {
        $unwind: {
          path: "$products",
        },
      },
      {
        $group: {
          _id: "$products._id",
          product: {
            $first: "$products",
          },
          count: {
            $sum: 1,
          },
          total: {
            $sum: {
              $multiply: [
                "$products.price",
                {
                  $sum: 1,
                },
              ],
            },
          },
        },
      },
      {
        $group: {
          _id: null,
          cartProducts: {
            $push: {
              id: "$product._id",
              title: "$product.title",
              price: "$product.price",
              image: "$product.image",
              count: "$count",
            },
          },
          total: {
            $sum: "$total",
          },
        },
      },
    ]);
    if (result.length === 0) {
      return response.status(200).send({ cartProducts: [], total: 0 });
    }
    return response
      .status(200)
      .send({ cartProducts: result[0].cartProducts, total: result[0].total });
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
};
export { getCartById, getCartProductsByUserId };

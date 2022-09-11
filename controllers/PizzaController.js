import PizzaModel from "../models/PizzaModel.js";

export const getAllPizzas = async (req, res) => {
    try {
      const pizza = await PizzaModel.find();

      res.json(pizza)
    } catch (error) {
        console.log(error);
    }
}
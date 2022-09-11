import DrinksModel from "../models/DrinksModel.js";

export const getAllDrinks = async (req, res) => {
  try {
    const drinks = await DrinksModel.find();

    res.json(drinks);
  } catch (error) {
    console.log(error);
  }
};

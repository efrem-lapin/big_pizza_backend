import SauceModel from "../models/SaucesModel.js";

export const getAllSauces = async (req, res) => {
  try {
    const sauces = await SauceModel.find();

    res.json(sauces);
  } catch (error) {
    console.log(error);
  }
};

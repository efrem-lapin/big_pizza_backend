import SushiModel from "../models/SushiModel.js";

export const getAllSushi = async (req, res) => {
  try {
    const sushi = await SushiModel.find();

    res.json(sushi);
  } catch (error) {
    console.log(error);
  }
};

import ComboModel from "../models/ComboModel.js";

export const getAllCombo = async (req, res) => {
  try {
    const combo = await ComboModel.find();

    res.json(combo);
  } catch (error) {
    console.log(error);
  }
};
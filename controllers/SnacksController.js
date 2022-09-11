import SnacksModel from "../models/SnacksModel.js";

export const getAllSnacks = async (req, res) => {
  try {
    const snacks = await SnacksModel.find();

    res.json(snacks);
  } catch (error) {
    console.log(error);
  }
};

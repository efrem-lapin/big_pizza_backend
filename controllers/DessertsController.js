import DessertsModel from "../models/DessertsModel.js";

export const getAllDesserts = async (req, res) => {
  try {
    const desserts = await DessertsModel.find();

    res.json(desserts);
  } catch (error) {
    console.log(error);
  }
};
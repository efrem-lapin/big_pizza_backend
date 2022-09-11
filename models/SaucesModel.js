import mongoose from "mongoose";

const SauceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  wiegth: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Sauce", SauceSchema);

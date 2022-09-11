import mongoose from "mongoose";

const SushiSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  weigth: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Sushi", SushiSchema);

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as PizzaControllers from "./controllers/PizzaController.js"

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DB OK!');
  })
  .catch(err => {
    console.log(err);
  })

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/pp", (req, res) => {
  res.send("pp");
})

app.get("/pizza", PizzaControllers.getAllPizzas);

app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("Server start...");
});
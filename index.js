import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as PizzaControllers from "./controllers/PizzaController.js"

mongoose
  .connect('mongodb+srv://adminMongo:passMDB12345@cluster0.1iyqpsd.mongodb.net/big_pizza?retryWrites=true&w=majority')
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

app.get("/pizza", PizzaControllers.getAllPizzas);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("Server start...");
});
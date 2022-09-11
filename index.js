import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as PizzaControllers from "./controllers/PizzaController.js";
import * as SushiControllers from "./controllers/SushiController.js";
import * as DrinksControllers from "./controllers/DrinksController.js";
import * as SnacksControllers from "./controllers/SnacksController.js";
import * as SaucesControllers from "./controllers/SaucesController.js";
import * as DessertsControllers from "./controllers/DessertsController.js";
import * as ComboControllers from "./controllers/ComboController.js";

mongoose
  .connect("mongodb+srv://adminMongo:passMDB12345@cluster0.1iyqpsd.mongodb.net/big_pizza?retryWrites=true&w=majority")
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
app.get("/sushi", SushiControllers.getAllSushi);
app.get("/drinks", DrinksControllers.getAllDrinks);
app.get("/snacks", SnacksControllers.getAllSnacks);
app.get("/sauces", SaucesControllers.getAllSauces);
app.get("/desserts", DessertsControllers.getAllDesserts);
app.get("/combo", ComboControllers.getAllCombo);

app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("Server start...");
});
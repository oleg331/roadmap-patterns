import { Dough } from "../Ingredients/dough/Dough";
import { Sauce } from "../Ingredients/sauce/Sauce";
import { Cheese } from "../Ingredients/cheese/Cheese";
import { Veggies } from "../Ingredients/veggies/Veggies";
import { Pepperoni } from "../Ingredients/pepperoni/Pepperoni";
import { Clams } from "../Ingredients/clams/Clams";

export interface PizzaIngredientFactory {
    createDough(): Dough;

    createSauce(): Sauce;

    createCheese(): Cheese;

    createVeggies(): Veggies[];

    createPepperoni(): Pepperoni;

    createClam(): Clams;
}
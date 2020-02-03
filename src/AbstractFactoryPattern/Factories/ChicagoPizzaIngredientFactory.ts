import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

import { Dough } from "../Ingredients/dough/Dough";
import { Sauce } from "../Ingredients/sauce/Sauce";
import { Cheese } from "../Ingredients/cheese/Cheese";
import { Veggies } from "../Ingredients/veggies/Veggies";
import { Pepperoni } from "../Ingredients/pepperoni/Pepperoni";
import { Clams } from "../Ingredients/clams/Clams";

import { ThickCrustDough } from "../Ingredients/dough/ThickCrustDough";
import { PlumTomatoSauce } from "../Ingredients/sauce/PlumTomatoSauce";
import { MozzarellaCheese } from "../Ingredients/cheese/MozzarellaCheese";
import { BlackOlives } from "../Ingredients/veggies/BlackOlives";
import { Spinach } from "../Ingredients/veggies/Spinach";
import { Eggplant } from "../Ingredients/veggies/Eggplant";
import { SlicedPepperoni } from "../Ingredients/pepperoni/SlicedPepperoni";
import { FrozenClams } from "../Ingredients/clams/FrozenClams";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ThickCrustDough();
    }

    public createSauce(): Sauce {
        return new PlumTomatoSauce();
    }

    public createCheese(): Cheese {
        return new MozzarellaCheese();
    }

    public createVeggies(): Veggies[] {
        let veggies: Veggies[] = [new BlackOlives(), new Spinach(), new Eggplant()];
        return veggies;
    }

    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    public createClam(): Clams {
        return new FrozenClams();
    }
}
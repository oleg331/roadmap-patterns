import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

import { Dough } from "../Ingredients/dough/Dough";
import { Sauce } from "../Ingredients/sauce/Sauce";
import { Cheese } from "../Ingredients/cheese/Cheese";
import { Veggies } from "../Ingredients/veggies/Veggies";
import { Pepperoni } from "../Ingredients/pepperoni/Pepperoni";
import { Clams } from "../Ingredients/clams/Clams";

import { ThinCrustDough } from "../Ingredients/dough/ThinCrustDough";
import { MarinaraSauce } from "../Ingredients/sauce/MarinaraSauce";
import { ReggianoCheese } from "../Ingredients/cheese/ReggianoCheese";
import { Garlic } from "../Ingredients/veggies/Garlic";
import { Onion } from "../Ingredients/veggies/Onion";
import { Mushroom } from "../Ingredients/veggies/Mushroom";
import { RedPepper } from "../Ingredients/veggies/RedPepper";
import { SlicedPepperoni } from "../Ingredients/pepperoni/SlicedPepperoni";
import { FreshClams } from "../Ingredients/clams/FreshClams";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ThinCrustDough();
    }

    public createSauce(): Sauce {
        return new MarinaraSauce();
    }

    public createCheese(): Cheese {
        return new ReggianoCheese();
    }

    public createVeggies(): Veggies[] {
        let veggies: Veggies[] = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
        return veggies;
    }

    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    public createClam(): Clams {
        return new FreshClams();
    }
}
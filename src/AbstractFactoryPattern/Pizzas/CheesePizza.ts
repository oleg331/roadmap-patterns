import { PizzaIngredientFactory } from "../Factories/PizzaIngredientFactory";
import { Pizza } from "./Pizza";

export class CheesePizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    public constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    public prepare() {
        console.info("Preparing " + this.name);

        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}
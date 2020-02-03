import { Pizza } from "./Pizza";
import { PizzaIngredientFactory } from "../Factories/PizzaIngredientFactory";

export class PepperoniPizza extends Pizza {
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
        this.veggies = this.ingredientFactory.createVeggies();
        this.pepperoni = this.ingredientFactory.createPepperoni();
    }
}
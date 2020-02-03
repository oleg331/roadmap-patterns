import { Pizza } from "../Pizza";

export class ChicagoStyleCheesePizza extends Pizza {
    public constructor() {
        super();
        this.name = "Chicago Style Deep Dish Cheese Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";

        this.toppings.push("Shredded Mozzarella Cheese");
    }

    public cut() {
        console.info("Cutting the pizza into square slices");
    }
}
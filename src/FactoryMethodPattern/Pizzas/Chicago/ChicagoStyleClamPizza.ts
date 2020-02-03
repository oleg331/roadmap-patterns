import { Pizza } from "../Pizza";

export class ChicagoStyleClamPizza extends Pizza {
    public constructor() {
        super();
        this.name = "Chicago Style Clam Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";

        this.toppings.push("Shredded Mozzarella Cheese");
        this.toppings.push("Frozen Clams from Chesapeake Bay");
    }

    public cut() {
        console.info("Cutting the pizza into square slices");
    }
}
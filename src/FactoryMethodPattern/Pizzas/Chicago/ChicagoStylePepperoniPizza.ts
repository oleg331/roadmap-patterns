import { Pizza } from "../Pizza";

export class ChicagoStylePepperoniPizza extends Pizza {
    public constructor() {
        super();
        this.name = "Chicago Style Pepperoni Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        
        this.toppings.push("Shredded Mozzarella Cheese");
        this.toppings.push("Black Olives");
        this.toppings.push("Spinach");
        this.toppings.push("Eggplant");
        this.toppings.push("Sliced Pepperoni");
    }

    public cut() {
        console.info("Cutting the pizza into square slices");
    }
}
import { Pizza } from "../Pizzas/Pizza";
import { NYStyleCheesePizza } from "../Pizzas/NewYork/NYStyleCheesePizza";
import { NYStyleVeggiePizza } from "../Pizzas/NewYork/NYStyleVeggiePizza";
import { NYStyleClamPizza } from "../Pizzas/NewYork/NYStyleClamPizza";
import { NYStylePepperoniPizza } from "../Pizzas/NewYork/NYStylePepperoniPizza";
import { ChicagoStyleCheesePizza } from "../Pizzas/Chicago/ChicagoStyleCheesePizza";
import { ChicagoStyleVeggiePizza } from "../Pizzas/Chicago/ChicagoStyleVeggiePizza";
import { ChicagoStyleClamPizza } from "../Pizzas/Chicago/ChicagoStyleClamPizza";
import { ChicagoStylePepperoniPizza } from "../Pizzas/Chicago/ChicagoStylePepperoniPizza";

export class DependentPizzaStore {
    public createPizza(style: string, type: string): Pizza | null {
        let pizza!: Pizza;

        if (style === "NY") {
            if (type === "cheese") {
                pizza = new NYStyleCheesePizza();
            } else if (type === "veggie") {
                pizza = new NYStyleVeggiePizza();
            } else if (type === "clam") {
                pizza = new NYStyleClamPizza();
            } else if (type === "pepperoni") {
                pizza = new NYStylePepperoniPizza();
            }
        } 
        else if (style === "Chicago") {
            if (type === "cheese") {
                pizza = new ChicagoStyleCheesePizza();
            } else if (type === "veggie") {
                pizza = new ChicagoStyleVeggiePizza();
            } else if (type === "clam") {
                pizza = new ChicagoStyleClamPizza();
            } else if (type === "pepperoni") {
                pizza = new ChicagoStylePepperoniPizza();
            }
        } else {
            console.info("Error: invalid type of pizza");
            return null;
        }

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}
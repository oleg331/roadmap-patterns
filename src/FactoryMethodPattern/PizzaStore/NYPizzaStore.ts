import { PizzaStore } from "./PizzaStore";
import { Pizza } from "../Pizzas/Pizza";

import { NYStyleCheesePizza } from "../Pizzas/NewYork/NYStyleCheesePizza";
import { NYStyleVeggiePizza } from "../Pizzas/NewYork/NYStyleVeggiePizza";
import { NYStyleClamPizza } from "../Pizzas/NewYork/NYStyleClamPizza";
import { NYStylePepperoniPizza } from "../Pizzas/NewYork/NYStylePepperoniPizza";

export class NYPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        if (item === "cheese") {
            return new NYStyleCheesePizza();
        } else if (item === "veggie") {
            return new NYStyleVeggiePizza();
        } else if (item === "clam") {
            return new NYStyleClamPizza();
        } else if (item === "pepperoni") {
            return new NYStylePepperoniPizza();
        }
        
        return new NYStylePepperoniPizza();
    }
}
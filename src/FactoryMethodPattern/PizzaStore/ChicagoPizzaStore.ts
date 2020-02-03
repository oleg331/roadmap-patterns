import { PizzaStore } from "./PizzaStore";
import { Pizza } from "../Pizzas/Pizza";

import { ChicagoStyleCheesePizza } from "../Pizzas/Chicago/ChicagoStyleCheesePizza";
import { ChicagoStyleVeggiePizza } from "../Pizzas/Chicago/ChicagoStyleVeggiePizza";
import { ChicagoStyleClamPizza } from "../Pizzas/Chicago/ChicagoStyleClamPizza";
import { ChicagoStylePepperoniPizza } from "../Pizzas/Chicago/ChicagoStylePepperoniPizza";

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        if (item === "cheese") {
            return new ChicagoStyleCheesePizza();
        } else if (item === "veggie") {
            return new ChicagoStyleVeggiePizza();
        } else if (item === "clam") {
            return new ChicagoStyleClamPizza();
        } else if (item === "pepperoni") {
            return new ChicagoStylePepperoniPizza();
        } 
        
        return new ChicagoStylePepperoniPizza()
    }
}
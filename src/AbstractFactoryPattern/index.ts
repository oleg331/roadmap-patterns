import { PizzaStore } from "../FactoryMethodPattern/PizzaStore/PizzaStore";
import { Pizza } from "../FactoryMethodPattern/Pizzas/Pizza";

import { NYPizzaStore } from "../FactoryMethodPattern/PizzaStore/NYPizzaStore";
import { ChicagoPizzaStore } from "../FactoryMethodPattern/PizzaStore/ChicagoPizzaStore";

export const ExecuteAbstractFactoryPattern = () => {
    console.log('');
    console.log('Abstract factory pattern:');

    let nyStore: PizzaStore = new NYPizzaStore();
    let chicagoStore: PizzaStore = new ChicagoPizzaStore();
    let pizza: Pizza = nyStore.orderPizza("cheese");
    console.info("Ethan ordered a " + pizza + "\n");
    pizza = chicagoStore.orderPizza("cheese");
    console.info("Joel ordered a " + pizza + "\n");
    pizza = nyStore.orderPizza("clam");
    console.info("Ethan ordered a " + pizza + "\n");
    pizza = chicagoStore.orderPizza("clam");
    console.info("Joel ordered a " + pizza + "\n");
    pizza = nyStore.orderPizza("pepperoni");
    console.info("Ethan ordered a " + pizza + "\n");
    pizza = chicagoStore.orderPizza("pepperoni");
    console.info("Joel ordered a " + pizza + "\n");
    pizza = nyStore.orderPizza("veggie");
    console.info("Ethan ordered a " + pizza + "\n");
    pizza = chicagoStore.orderPizza("veggie");
    console.info("Joel ordered a " + pizza + "\n");
}
import { PizzaStore } from "./PizzaStore/PizzaStore";
import { Pizza } from "./Pizzas/Pizza";

import { NYPizzaStore } from "./PizzaStore/NYPizzaStore";
import { ChicagoPizzaStore } from "./PizzaStore/ChicagoPizzaStore";

export const ExecuteFactoryMethodPattern = () => {
  console.log('');
  console.log('Factory method pattern:');

  let nyStore: PizzaStore = new NYPizzaStore();
  let chicagoStore: PizzaStore = new ChicagoPizzaStore();
  let pizza: Pizza = nyStore.orderPizza("cheese");
  console.info("Ethan ordered a " + pizza.getName() + "\n");
  pizza = chicagoStore.orderPizza("cheese");
  console.info("Joel ordered a " + pizza.getName() + "\n");
  pizza = nyStore.orderPizza("clam");
  console.info("Ethan ordered a " + pizza.getName() + "\n");
  pizza = chicagoStore.orderPizza("clam");
  console.info("Joel ordered a " + pizza.getName() + "\n");
  pizza = nyStore.orderPizza("pepperoni");
  console.info("Ethan ordered a " + pizza.getName() + "\n");
  pizza = chicagoStore.orderPizza("pepperoni");
  console.info("Joel ordered a " + pizza.getName() + "\n");
  pizza = nyStore.orderPizza("veggie");
  console.info("Ethan ordered a " + pizza.getName() + "\n");
  pizza = chicagoStore.orderPizza("veggie");
  console.info("Joel ordered a " + pizza.getName() + "\n");
};

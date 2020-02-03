import { Pizza } from "../Pizzas/Pizza";

export abstract class PizzaStore {
    abstract createPizza(item: string): Pizza;

    public orderPizza(type: string): Pizza {
        let pizza: Pizza = this.createPizza(type);

        console.info("--- Making a " + pizza.getName() + " ---");

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}
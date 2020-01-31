import { Beverage } from "./models/Beverage";
import { Expresso } from "./beverages/Espresso";
import { HouseBlend } from "./beverages/HouseBlend";
import { Mocha } from "./beverages/Mocha";
import { Whip } from "./beverages/Whip";
import { Soy } from "./beverages/Soy";

export const ExecuteDecoratorPattern = () => {
    console.log('');
    console.log('Decorator pattern:');

    const beverage: Beverage = new Expresso();
    console.log(beverage.getDescription() + " $" + beverage.cost());

    let beverage1: Beverage;

    beverage1 = new HouseBlend();
    beverage1 = new Mocha(beverage1);
    beverage1 = new Whip(beverage1);
    beverage1 = new Whip(beverage1);
    console.log(beverage1.getDescription() + " $" + beverage1.cost());

    let beverage2: Beverage = new Expresso();
    beverage2.setSize(1);
    // beverage2 = new Mocha(beverage2);
    beverage2 = new Soy(beverage2);
    console.log(beverage2.getDescription() + " $" + beverage2.cost());
}
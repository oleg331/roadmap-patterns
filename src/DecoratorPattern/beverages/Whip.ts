import { Beverage } from "../models/Beverage";
import { CondimentDecorator } from "../models/CondimentDecorator";

export class Whip extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    cost(): number {
        return 0.50 + this.beverage.cost();
    }
}
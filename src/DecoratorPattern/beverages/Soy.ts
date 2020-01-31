import { Beverage } from "../models/Beverage";
import { CondimentDecorator } from "../models/CondimentDecorator";

export class Soy extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }

    cost(): number {
        let cost: number = this.beverage.cost();
        const size: number = this.beverage.getSize();

        if (size === Beverage.SMALL) {
            cost += 0.10;
        } else if (size === Beverage.LARGE) {
            cost += 0.15;
        } else if (size === Beverage.EXTREA_LARGE) {
            cost += 0.20;
        }

        return cost;
    }
}
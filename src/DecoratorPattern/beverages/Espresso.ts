import { Beverage } from "../models/Beverage";

export class Expresso extends Beverage {
    constructor() {
        super();
        this.description = "Espresso";
    }

    cost(): number {
        return 1.99;
    }
}
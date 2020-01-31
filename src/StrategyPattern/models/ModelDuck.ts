import { Duck } from "./Duck";
import { FlyNoWay } from "../behaviours/Fly/FlyNoWay";
import { Quack } from "../behaviours/Quack/Quack";

export class ModelDuck extends Duck {
    public constructor() {
        super();
        this.flyBehaviour = new FlyNoWay();
        this.quackBehaviour = new Quack();
    }

    public display(): void {
        console.log("I`m a model duck");
    }
}
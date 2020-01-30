import { Duck } from "./Duck";
import { FlyNoWay } from "../behaviours/Fly";
import { Quack } from "../behaviours/Quack";

export class ModelDuck extends Duck {
    public constructor() {
        super();
        this.flyBehaviour = new FlyNoWay();
        this.quackBehaviour = new Quack();
    }

    public display() {
        console.log("I`m a model duck");
    }
}
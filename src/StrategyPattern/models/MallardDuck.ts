import { Duck } from "./Duck";
import { Quack } from "../behaviours/Quack";
import { FlyWithWings } from "../behaviours/Fly";

export class MallardDuck extends Duck {
    constructor() {
        super();

        this.quackBehaviour = new Quack();
        this.flyBehaviour = new FlyWithWings();
    }

    public display(): void {
        console.log("I`m a real Mallard duck");
    }
}
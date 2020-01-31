import { Duck } from "./Duck";
import { FlyWithWings } from "../behaviours/Fly/FlyWithWings";
import { Quack } from "../behaviours/Quack/Quack";

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
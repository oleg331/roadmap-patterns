import { FlyBehaviour } from "../behaviours/Fly";
import { QuackBehaviour } from "../behaviours/Quack";

export abstract class Duck {
    public flyBehaviour!: FlyBehaviour;
    public quackBehaviour!: QuackBehaviour;

    public abstract display(): void;

    public performFly() {
        this.flyBehaviour.fly();
    }

    public performQuack() {
        this.quackBehaviour.quack();
    }

    public setFlyBehaviour(fb: FlyBehaviour) {
        this.flyBehaviour = fb;
    }

    public setQuackBehaviour(qb: QuackBehaviour) {
        this.quackBehaviour = qb;
    }

    public swim() {
        console.log("All ducks float, even decoys");
    }
}
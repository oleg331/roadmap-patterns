import { FlyBehaviour } from "../behaviours/Fly/FlyBehaviour";
import { QuackBehaviour } from "../behaviours/Quack/QuackBehaviour";

export abstract class Duck {
    public flyBehaviour!: FlyBehaviour;
    public quackBehaviour!: QuackBehaviour;

    public abstract display(): void;

    public performFly(): void {
        this.flyBehaviour.fly();
    }

    public performQuack(): void {
        this.quackBehaviour.quack();
    }

    public setFlyBehaviour(fb: FlyBehaviour): void {
        this.flyBehaviour = fb;
    }

    public setQuackBehaviour(qb: QuackBehaviour): void {
        this.quackBehaviour = qb;
    }

    public swim(): void {
        console.log("All ducks float, even decoys");
    }
}
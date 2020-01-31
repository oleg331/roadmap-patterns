import { QuackBehaviour } from "./QuackBehaviour";

export class Quack implements QuackBehaviour {
    public quack(): void {
        console.log("Quack");
    }
}
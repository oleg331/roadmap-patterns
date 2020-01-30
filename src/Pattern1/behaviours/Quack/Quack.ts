import { QuackBehaviour } from "./QuackBehaviour";

export class Quack implements QuackBehaviour {
    public quack() {
        console.log("Quack");
    }
}
import { QuackBehaviour } from "./QuackBehaviour";

export class Squeak implements QuackBehaviour {
    public quack() {
        console.log("Squeak");
    }
}
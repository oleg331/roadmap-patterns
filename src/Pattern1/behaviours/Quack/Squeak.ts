import { QuackBehaviour } from "./QuackBehaviour";

export class Squeak implements QuackBehaviour {
    public quack(): void {
        console.log("Squeak");
    }
}
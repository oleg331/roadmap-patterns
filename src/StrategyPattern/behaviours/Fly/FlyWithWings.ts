import { FlyBehaviour } from "./FlyBehaviour";

export class FlyWithWings implements FlyBehaviour {
    public fly(): void {
        console.log("I`m flying");
    }
}
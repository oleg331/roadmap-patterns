import { FlyBehaviour } from "./FlyBehaviour";

export class FlyRocketPowered implements FlyBehaviour {
    public fly(): void {
        console.log("I`m flying with a rocket!");
    }
}
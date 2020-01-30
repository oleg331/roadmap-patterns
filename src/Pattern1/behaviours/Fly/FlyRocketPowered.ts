import { FlyBehaviour } from "./FlyBehaviour";

export class FlyRocketPowered implements FlyBehaviour {
    public fly() {
        console.log("I`m flying with a rocket!");
    }
}
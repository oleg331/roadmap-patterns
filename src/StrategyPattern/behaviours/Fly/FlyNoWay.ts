import { FlyBehaviour } from "./FlyBehaviour";

export class FlyNoWay implements FlyBehaviour {
    public fly(): void {
        console.log("I`m can`t fly");
    }
}
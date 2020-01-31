import { QuackBehaviour } from "./QuackBehaviour";

export class MuteQuack implements QuackBehaviour {
  public quack(): void {
    console.log("<< Silence >>");
  }
}
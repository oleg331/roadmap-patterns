import { QuackBehaviour } from "./QuackBehaviour";

export class MuteQuack implements QuackBehaviour {
  public quack() {
    console.log("<< Silence >>");
  }
}
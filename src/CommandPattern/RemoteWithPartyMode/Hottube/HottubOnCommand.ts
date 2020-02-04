import { Command } from "../Command";
import { Hottub } from "./Hottub";

export class HottubOnCommand implements Command {
    hottub: Hottub;

    public constructor(hottub: Hottub) {
        this.hottub = hottub;
    }

    public execute() {
        this.hottub.on();
        this.hottub.setTemperature(104);
        this.hottub.circulate();
    }

    public undo() {
        this.hottub.off();
    }
}
import { Command } from "../Command";
import { Hottub } from "./Hottub";

export class HottubOffCommand implements Command {
    hottub: Hottub;

    public constructor(hottub: Hottub) {
        this.hottub = hottub;
    }

    public execute() {
        this.hottub.setTemperature(98);
        this.hottub.off();
    }

    public undo() {
        this.hottub.on();
    }
}
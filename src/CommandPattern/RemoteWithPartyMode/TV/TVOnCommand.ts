import { Command } from "../Command";
import { TV } from "./TV";

export class TVOnCommand implements Command {
    tv: TV;

    public constructor(tv: TV) {
        this.tv = tv;
    }

    public execute() {
        this.tv.on();
        this.tv.setInputChannel();
    }

    public undo() {
        this.tv.off();
    }
}
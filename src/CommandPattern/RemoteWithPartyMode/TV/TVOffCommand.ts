import { Command } from "../Command";
import { TV } from "./TV";

export class TVOffCommand implements Command {
    tv: TV;

    public constructor(tv: TV) {
        this.tv = tv;
    }

    public execute() {
        this.tv.off();
    }

    public undo() {
        this.tv.on();
    }
}
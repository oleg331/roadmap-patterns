import { Command } from "./Command";

export class NoCommand implements Command {
    public execute() {
    }

    public undo() {
    }
}
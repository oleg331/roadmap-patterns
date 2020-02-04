import { NoCommand } from "./NoCommand";
import { Command } from "./Command";

export class RemoteControl {
    onCommands!: Command[];
    offCommands!: Command[];
    undoCommand: Command;

    public constructor() {
        let noCommand: Command = new NoCommand();
        for (let i: number = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
        this.undoCommand = noCommand;
    }

    public setCommand(slot: number, onCommand: Command, offCommand: Command) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public onButtonWasPushed(slot: number) {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    public offButtonWasPushed(slot: number) {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    public undoButtonWasPushed() {
        this.undoCommand.undo();
    }

    public toString(): string {
        let stringBuff = `

            ------ Remote Control -------
        `;
        for (let i: number = 0; i < this.onCommands.length; i++) {
            stringBuff.concat(
                "[slot ", i.toString(), "] ",
                this.onCommands[i].constructor.name,
                this.offCommands[i].constructor.name,
                "\n"
            );
        }
        stringBuff.concat("[undo] ", this.undoCommand.constructor.name, "\n");
        return stringBuff;
    }
}
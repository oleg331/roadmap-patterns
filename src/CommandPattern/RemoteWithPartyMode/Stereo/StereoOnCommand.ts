import { Command } from "../Command";
import { Stereo } from "./Stereo";

export class StereoOnCommand implements Command {
    stereo: Stereo;

    public constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    public execute() {
        this.stereo.on();
    }

    public undo() {
        this.stereo.off();
    }
}
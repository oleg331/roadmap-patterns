import { Command } from "../Command";
import { Stereo } from "./Stereo";

export class StereoOnWithCDCommand implements Command {
    stereo: Stereo;

    public constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    public execute() {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(11);
    }

    public undo() {
        this.stereo.off();
    }
}
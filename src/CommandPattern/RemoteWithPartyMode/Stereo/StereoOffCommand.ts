import { Command } from "../Command";
import { Stereo } from "./Stereo";

export class StereoOffCommand implements Command {
    stereo: Stereo;

    public constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    public execute() {
        this.stereo.off();
    }

    public undo() {
        this.stereo.on();
    }
}
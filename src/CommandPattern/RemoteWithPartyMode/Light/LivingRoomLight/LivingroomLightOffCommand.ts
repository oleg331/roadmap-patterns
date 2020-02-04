import { Command } from "../../Command";
import { Light } from "../Light";

export class LivingroomLightOffCommand implements Command {
    light: Light;

    public constructor(light: Light) {
        this.light = light;
    }

    public execute() {
        this.light.off();
    }

    public undo() {
        this.light.on();
    }
}
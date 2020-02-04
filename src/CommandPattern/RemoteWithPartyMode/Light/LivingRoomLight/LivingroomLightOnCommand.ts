import { Command } from "../../Command";
import { Light } from "../Light";

export class LivingroomLightOnCommand implements Command {
    light: Light;

    public constructor(light: Light) {
        this.light = light;
    }

    public execute() {
        this.light.on();
    }

    public undo() {
        this.light.off();
    }
}
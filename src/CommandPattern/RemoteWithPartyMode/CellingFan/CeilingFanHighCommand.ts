import { Command } from "../Command";
import { CeilingFan } from "./CeilingFan";

export class CeilingFanHighCommand implements Command {
    ceilingFan: CeilingFan;
    prevSpeed!: number;

    public constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    public execute() {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.high();
    }

    public undo() {
        switch ((this.prevSpeed)) {
            case CeilingFan.HIGH:
                this.ceilingFan.high();
                break;
            case CeilingFan.MEDIUM:
                this.ceilingFan.medium();
                break;
            case CeilingFan.LOW:
                this.ceilingFan.low();
                break;
            default:
                this.ceilingFan.off();
                break;
        }
    }
}
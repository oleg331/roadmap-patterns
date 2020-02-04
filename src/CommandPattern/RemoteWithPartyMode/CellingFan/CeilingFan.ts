export class CeilingFan {
    public static HIGH: number = 3;
    public static MEDIUM: number = 2;
    public static LOW: number = 1;
    public static OFF: number = 0;

    location: string;
    speed!: number;

    public constructor(location: string) {
        this.location = location;
    }

    public high(): void {
        this.speed = CeilingFan.HIGH;
        console.info(this.location + " ceiling fan is on high");
    }

    public medium(): void {
        this.speed = CeilingFan.MEDIUM;
        console.info(this.location + " ceiling fan is on medium");
    }

    public low(): void {
        this.speed = CeilingFan.LOW;
        console.info(this.location + " ceiling fan is on low");
    }

    public off(): void {
        this.speed = CeilingFan.OFF;
        console.info(this.location + " ceiling fan is off");
    }

    public getSpeed(): number {
        return this.speed;
    }
}
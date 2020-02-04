export class Light {
    location: string;
    level!: number;

    public constructor(location: string) {
        this.location = location;
    }

    public on() {
        this.level = 100;
        console.info("Light is on");
    }

    public off() {
        this.level = 0;
        console.info("Light is off");
    }

    public dim(level: number) {
        this.level = level;
        if (level === 0) {
            this.off();
        } else {
            console.info("Light is dimmed to " + level + "%");
        }
    }

    public getLevel(): number {
        return this.level;
    }
}
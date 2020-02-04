export class TV {
    location: string;
    channel!: number;

    public constructor(location: string) {
        this.location = location;
    }

    public on() {
        console.info(this.location + " TV is on");
    }

    public off() {
        console.info(this.location + " TV is off");
    }

    public setInputChannel() {
        this.channel = 3;
        console.info(this.location + " TV channel is set for DVD");
    }
}
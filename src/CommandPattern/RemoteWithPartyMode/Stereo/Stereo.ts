export class Stereo {
    location: string;

    public constructor(location: string) {
        this.location = location;
    }

    public on() {
        console.info(this.location + " stereo is on");
    }

    public off() {
        console.info(this.location + " stereo is off");
    }

    public setCD() {
        console.info(this.location + " stereo is set for CD input");
    }

    public setDVD() {
        console.info(this.location + " stereo is set for DVD input");
    }

    public setRadio() {
        console.info(this.location + " stereo is set for Radio");
    }

    public setVolume(volume: number) {
        console.info(this.location + " Stereo volume set to " + volume);
    }
}
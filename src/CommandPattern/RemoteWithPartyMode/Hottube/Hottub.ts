export class Hottub {
    __on!: boolean;
    temperature!: number;

    public on() {
        this.__on = true;
    }

    public off() {
        this.__on = false;
    }

    public circulate() {
        if (this.__on) {
            console.info("Hottub is bubbling!");
        }
    }

    public jetsOn() {
        if (this.__on) {
            console.info("Hottub jets are on");
        }
    }

    public jetsOff() {
        if (this.__on) {
            console.info("Hottub jets are off");
        }
    }

    public setTemperature(temperature: number) {
        if (temperature > this.temperature) {
            console.info("Hottub is heating to a steaming " + temperature + " degrees");
        } else {
            console.info("Hottub is cooling to " + temperature + " degrees");
        }
        this.temperature = temperature;
    }
}
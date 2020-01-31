import { Observer } from "./interfaces/Observer";
import { DisplayElement } from "./interfaces/DisplayElement";
import { Subject } from "./interfaces/Subject";

class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    display(): void {
        console.log("Current conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity");
    }
}

export default CurrentConditionsDisplay;
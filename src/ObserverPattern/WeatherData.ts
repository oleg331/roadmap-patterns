import { Subject } from "./interfaces/Subject";
import { Observer } from "./interfaces/Observer";

class WeatherData implements Subject {
    private observers: Observer[];
    
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    constructor() {
        this.observers = [];
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        let i: number = this.observers.indexOf(observer);
        if (i >= 0) {
            this.observers.slice(i, 1);
        }
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    measurementsChanged(): void {
        this.notifyObservers();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}

export default WeatherData;
import CurrentConditionsDisplay from "./CurrentConditionsDisplay";
import WeatherData from "./WeatherData";

export const ExecuteObserverPattern = () => {
    console.log('');
    console.log('Observer pattern:');

    let weatherData: WeatherData = new WeatherData();
    let currentConditionDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    
    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);

    currentConditionDisplay.display();
}
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";

interface WeatherData {
    current: CurrentWeather;
    weeklyForecast: DailyWeather[];
}
export default WeatherData;

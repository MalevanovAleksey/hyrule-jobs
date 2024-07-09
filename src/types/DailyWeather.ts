interface DailyWeather {
    dayOfWeek: string;
    morning: {
        temp: number;
        condition: string;
    };
    evening: {
        temp: number;
        condition: string;
    };
}

export default DailyWeather;

<template>
    <div class="weather">
        <div class="weather-header">
            <div class="weather-header-label">
                <div>SAN FRANCISCO</div>
                <div>Weather</div>
            </div>
            <div class="weather-logo"><BaseIcon class="weather-icon" iconName="c03n" :size="50" /></div>
            <div class="weather-current_state">
                <div class="weather-current_state-temp">{{ currentWeatherTemp }}</div>
                <div class="weather-current_state-cloud">broken clouds</div>
            </div>
        </div>
        <div class="weather-content">
            <div class="weather-card" v-for="(item, i) in dailyWeatherItems" :key="i">
                <div class="weather-card-title">{{ item.dayOfWeek }}</div>
                <div class="weather-card-logo"><BaseIcon class="weather-icon" iconName="c02n" :size="50" /></div>
                <div class="weather-card-state-morning">{{ item.morning.temp }} °C</div>
                <div class="weather-card-state-evening">{{ item.evening.temp }} °C</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import WeatherData from "@/types/WeatherData";
import CurrentWeather from "@/types/CurrentWeather";
import DailyWeather from "@/types/DailyWeather";

import BaseIcon from "@/components/baseComponents/BaseIcon.vue";
export default defineComponent({
    name: "Weather",
    components: {
        BaseIcon,
    },

    setup() {
        const weatherData = ref<WeatherData>();
        const currentWeather = ref<CurrentWeather>();
        const dailyWeatherItems = ref<DailyWeather[]>([]);

        const fetchWeather = async () => {
            fetch("https://api.weather.yandex.ru/")
                .then((response) => response.json())
                .then((data) => {
                    weatherData.value = data.data;
                    currentWeather.value = data.data.current;
                    dailyWeatherItems.value = data.data.weeklyForecast;
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        };

        const currentWeatherTemp = computed(() => `${currentWeather.value?.temp} °C`);

        onMounted(() => {
            fetchWeather();
        });

        return {
            weatherData,
            currentWeatherTemp,
            dailyWeatherItems,
        };
    },
});
</script>

<style scoped lang="scss">
.weather {
    color: white;
    width: 45%;
    padding: 50px 0;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-header {
        display: flex;
        justify-content: space-around;
        width: 70%;

        &-label {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 15px;
        }
    }

    &-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-state {
            &-morning,
            &-evening {
                font-size: 12px;
            }
        }
    }

    &-current_state {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-cloud {
            font-size: 12px;
        }
    }

    &-icon {
        margin: 0;
    }

    &-content {
        display: flex;
        width: 90%;
        justify-content: space-around;
    }
}
</style>

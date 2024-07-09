<template>
    <div class="time-focus">
        <h2 class="time-focus-title">{{ title }}</h2>
        <div class="timer">
            <span class="timer-value">{{ timerValue }}</span>
        </div>
        <div class="controls">
            <button @click="toggleTimer">
                <BaseIcon class="controls-icon" iconName="play" :size="14" v-if="!isTimerRunning" />
                <BaseIcon class="controls-icon" iconName="pause" :size="14" v-if="isTimerRunning" />
            </button>
            <button @click="switchMode">
                <BaseIcon class="controls-icon" iconName="next" :size="14" />
            </button>
        </div>
    </div>

    <div class="time-notion">
        <BaseIcon class="controls-icon" iconName="ok-circle" :size="20" />
        <label class="time-notion-label">Change the timer state and control your focus ^^^</label>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import BaseIcon from "@/components/baseComponents/BaseIcon.vue";
import TimerMode from "@/types/TimerMode";

export default defineComponent({
    components: {
        BaseIcon,
    },
    setup() {
        const timerMode = ref<TimerMode>(TimerMode.FOCUS);
        const timerValue = ref("25:00");
        const isTimerRunning = ref(false);
        const intervalId = ref<number | null>(null);

        const title = computed(() => (timerMode.value === TimerMode.FOCUS ? "Time to focus!" : "Time for a break!"));

        const toggleTimer = () => {
            isTimerRunning.value = !isTimerRunning.value;
            if (isTimerRunning.value) {
                startTimer();
            } else {
                stopTimer();
            }
        };

        const startTimer = () => {
            intervalId.value = setInterval(() => {
                updateTimerValue();
            }, 1000);
        };

        const stopTimer = () => {
            if (intervalId.value !== null) {
                clearInterval(intervalId.value);
                intervalId.value = null;
            }
        };

        const updateTimerValue = () => {
            const [minutes, seconds] = timerValue.value.split(":").map(Number);
            let newSeconds = seconds - 1;
            let newMinutes = minutes;

            if (newSeconds < 0) {
                newSeconds = 59;
                newMinutes -= 1;
            }

            timerValue.value = `${newMinutes.toString().padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}`;

            if (newMinutes === 0 && newSeconds === 0) {
                switchMode();
            }
        };

        const switchMode = () => {
            stopTimer();
            isTimerRunning.value = false;
            timerMode.value = timerMode.value === TimerMode.FOCUS ? TimerMode.BREAK : TimerMode.FOCUS;
            timerValue.value = timerMode.value === TimerMode.FOCUS ? "25:00" : "05:00";
        };

        return { title, timerValue, isTimerRunning, toggleTimer, switchMode };
    },
});
</script>

<style scoped lang="scss">
.time-focus {
    text-align: center;
    padding: 2rem;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    &-title {
        font-size: 16px;
    }
}

.timer {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.controls button {
    font-size: 2rem;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    border-radius: 0.25rem;
}

.controls button:hover {
    background-color: #45a049;
}
.controls-icon {
    margin: 0;
}

.time-notion {
    display: flex;
    margin-top: 15px;
    padding: 2rem;
    background-color: rgb(237, 243, 236);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    &-label {
        margin-left: 10px;
    }
}
</style>

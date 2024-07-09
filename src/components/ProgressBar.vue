<template>
    <div class="progress-bar">
        <div class="progress-bar-wrapper">
            <div class="progress-bar-contaiter">
                <div class="progress-bar-item" :style="{ width: year + '%' }"></div>
            </div>
            <label>{{ yearProgress }}</label>
        </div>

        <div class="progress-bar-wrapper">
            <div class="progress-bar-contaiter">
                <div class="progress-bar-item" :style="{ width: month + '%' }"></div>
            </div>
            <label>{{ monthProgress }}</label>
        </div>
        <div class="progress-bar-wrapper">
            <div class="progress-bar-contaiter">
                <div class="progress-bar-item" :style="{ width: week + '%' }"></div>
            </div>
            <label>{{ weekProgress }}</label>
        </div>
        <div class="progress-bar-wrapper">
            <div class="progress-bar-contaiter">
                <div class="progress-bar-item" :style="{ width: day + '%' }"></div>
            </div>
            <label>{{ dayProgress }}</label>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
    name: "TodoList",

    setup() {
        const year = ref(52);
        const month = ref(29);
        const week = ref(22);
        const day = ref(52);

        const yearProgress = computed(() => `Year: ${year.value} %`);
        const monthProgress = computed(() => `Month: ${month.value} %`);
        const weekProgress = computed(() => `Week: ${week.value} %`);
        const dayProgress = computed(() => `Day: ${day.value} %`);

        return { yearProgress, monthProgress, weekProgress, dayProgress, year, month, week, day };
    },
});
</script>

<style scoped lang="scss">
.progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    padding: 5px;
    height: 200px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .progress-bar-contaiter {
        width: 50%;
        border: 1px solid black;
        border-radius: 6px;
        padding: 3px;
    }
    &-item {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        background-color: #4caf50;
        height: 25px;
    }
    &-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }
    label {
        margin-left: 10px;
        font-size: 13px;
    }
}
</style>

<template>
    <div class="calendar-container">
        <div class="calendar-wrapper hour">
            <!-- <div class="white_line"></div> -->
            {{ hours }}
        </div>
        <div class="calendar-wrapper minutes">
            <!-- <div class="white_line"></div> -->
            {{ minutes }}
            <span class="calendar-day_name">{{ dayName }}</span>
            
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    setup() {
        const hours = ref<string | number>("");
        const minutes = ref<string | number>("");
        const dayName = ref("");
        const options: any = { weekday: "long" };

        onMounted(() => {
            setInterval(() => {
                updateTime();
            }, 1000);
        });

        const updateTime = () => {
            const date = new Date();
            hours.value = date.getHours();
            minutes.value = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
            dayName.value = new Intl.DateTimeFormat("en-US", options).format(date);
        };

        return { hours, minutes, dayName };
    },
});
</script>

<style scoped lang="scss">
.calendar {
    &-wrapper {
        color: #fff;
        background-color: rgb(61, 137, 92);
        font-size: 50px;
        padding: 50px 20px;
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 5px;
        &.hour {
            margin-right: 4px;
        }
        .white_line {
            width: 100%;
            height: 1px;
            border-bottom: 1px solid white;
            position: absolute;
            left: 0;
        }
    }

    &-container {
        display: flex;
        padding: 4px;
        background-color: black;
        border-radius: 5px;
    }

    &-day_name {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
}
</style>

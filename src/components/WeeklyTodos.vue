<template>
    <div class="weekly-container">
        <h2>WEEKLY TO DO’S</h2>
        <BaseLine />

        <div class="weekly-elem" v-for="day in dayOfWeek" :key="day.id">
            <BaseIcon iconName="triangle-right" :size="14" />
            <div class="weekly-elem-label">{{ day.label }}</div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import BaseLine from "@/components/baseComponents/BaseLine.vue";
import DayOfWeek from "@/types/baseTypes/DayOfWeek";
import BaseIcon from "@/components/baseComponents/BaseIcon.vue";

export default defineComponent({
    components: {
        BaseLine,
        BaseIcon,
    },

    setup() {
        const dayOfWeek = computed(() => {
            return Object.values(DayOfWeek).map((value, i) => ({
                label: value,
                id: i,
            }));
        });
        return { dayOfWeek };
    },
});
</script>

<style scoped lang="scss">
.weekly-elem {
    display: flex;
    padding: 5px;
    &-label {
        background: rgba(237, 243, 236, 1);
        padding: 0 5px;
    }
}

.weekly-container {
    margin-bottom: 15px;
}
</style>

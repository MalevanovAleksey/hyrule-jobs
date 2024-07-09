<template>
    <div class="todo-view-container">
        <TodoCardView v-for="day in dayOfWeek" :key="day.id" :item="day" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TodoCardView from "@/components/TodoCardView.vue";
import DayOfWeek from "@/types/baseTypes/DayOfWeek";

export default defineComponent({
    components: { TodoCardView },
    setup() {
        const dayOfWeek = computed(() => {
            return Object.values(DayOfWeek).map((value, i) => ({
                title: value,
                id: i,
                todoItems: [
                    {
                        id: i,
                        title: "Todo1",
                        complited: false,
                    },
                    {
                        id: i + 1,
                        title: "Todo2",
                        complited: false,
                    },
                    {
                        id: i + 3,
                        title: "Todo3",
                        complited: false,
                    },
                ],
            }));
        });
        return { dayOfWeek };
    },
});
</script>

<style scoped lang="scss">
.todo-view-container {
    width: 100%;
    margin: 0 45px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
</style>

<template>
    <div class="todo-view-container">
        <TodoCardView v-for="day in dayOfWeek" :key="day.id" :item="day" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TodoCardView from "@/components/TodoCardView.vue";
import DayOfWeek from "@/types/baseTypes/DayOfWeek";
import { mapActions, mapGetters } from "vuex";
import store from "@/store";
import TodoItem from "@/types/TodoItem";

export default defineComponent({
    components: { TodoCardView },
    setup() {
        const todoItems = computed(() => store.state.todoItems);

        const dayOfWeek = computed(() => {
            return Object.values(DayOfWeek).map((value, i) => ({
                title: value,
                id: i,
                todoItems: todoItems.value.filter((item) => item.dayType === value) as TodoItem[],
            }));
        });

        return { dayOfWeek };
    },

    // computed: {
    //     ...mapGetters(["todoItems"]),
    //     count() {
    //         return this.todoItems;
    //     },
    // },
    methods: {
        ...mapActions(["fetchTodoItems"]),
    },

    mounted() {
        this.fetchTodoItems();
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

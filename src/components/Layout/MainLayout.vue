<template>
    <main class="main">
        <BaseIcon class="main-logo" iconName="watermelon" :size="78" />

        <h1 class="main-title">Weekly Planner</h1>

        <BaseLine />
        <BaseLine />

        <div class="todo-wrapper">
            <AsideLayout> <Calendar /> </AsideLayout>

            <TodoView />

            <AsideLayout> <WeeklyTodos /> </AsideLayout>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseIcon from "@/components/baseComponents/BaseIcon.vue";
import BaseLine from "@/components/baseComponents/BaseLine.vue";
import AsideLayout from "@/components/Layout/AsideLayout.vue";
import TodoView from "@/components/Layout/TodoView.vue";
import Calendar from "@/components/Calendar.vue";
import WeeklyTodos from "@/components/WeeklyTodos.vue";

export default defineComponent({
    components: {
        BaseIcon,
        BaseLine,
        AsideLayout,
        TodoView,
        Calendar,
        WeeklyTodos,
    },
});
</script>

<style scoped lang="scss">
.main {
    width: 90%;
    margin: 0 auto;
    position: relative;
    &-logo {
        position: absolute;
        top: -92px;
    }

    &-title {
        margin-top: 50px;
    }

    .todo-wrapper {
        display: flex;
    }
}
</style>

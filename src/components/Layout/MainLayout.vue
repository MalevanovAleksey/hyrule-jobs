<template>
    <main class="main">
        <BaseIcon class="main-logo" iconName="watermelon" :size="78" />

        <h1 class="main-title">Weekly Planner</h1>

        <BaseLine />
        <BaseLine />

        <div class="todo-wrapper">
            <AsideLayout> <Calendar /> <ProgressBar /> </AsideLayout>

            <TodoView />

            <AsideLayout> <WeeklyTodos /> <BaseLine /> <TimeFocus /> </AsideLayout>
        </div>
        <Weather />
    </main>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { mapActions, mapGetters, useStore } from "vuex";
import BaseIcon from "@/components/baseComponents/BaseIcon.vue";
import BaseLine from "@/components/baseComponents/BaseLine.vue";
import AsideLayout from "@/components/Layout/AsideLayout.vue";
import TodoView from "@/components/Layout/TodoView.vue";
import Calendar from "@/components/Calendar.vue";
import WeeklyTodos from "@/components/WeeklyTodos.vue";
import TimeFocus from "@/components/TimeFocus.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import Weather from "@/components/Weather.vue";

export default defineComponent({
    components: {
        BaseIcon,
        BaseLine,
        AsideLayout,
        TodoView,
        Calendar,
        WeeklyTodos,
        TimeFocus,
        Weather,
        ProgressBar,
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

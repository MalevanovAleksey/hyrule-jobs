<template>
    <main class="main">
        <BaseIcon class="main-logo" iconName="watermelon" :size="78" />

        <h1>Weekly Planner</h1>

        <BaseLine />
        <BaseLine />

        <div class="todo-wrapper">
            <AsideLayout />

            <TodoView />

            <AsideLayout />
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseIcon from "@/components/baseComponents/BaseIcon.vue";
import BaseLine from "@/components/baseComponents/BaseLine.vue";
import AsideLayout from "@/components/Layout/AsideLayout.vue";
import TodoView from "@/components/Layout/TodoView.vue";

export default defineComponent({
    components: {
        BaseIcon,
        BaseLine,
        AsideLayout,
        TodoView,
    },
});
</script>

<style scoped lang="scss">
.main {
    width: 90%;
    margin: 0 auto;
    position: relative;
    &-logo {
        position: relative;
        bottom: 40px;
    }

    .todo-wrapper {
        display: flex;
    }
}
</style>

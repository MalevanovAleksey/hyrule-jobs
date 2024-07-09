<template>
    <div class="todo-card-container">
        <div class="todo-card-title">
            <BaseIcon iconName="calendar" :size="30" />
            <label class="todo-title"> {{ todoTitle }} </label>
        </div>
        <TodoListExample />
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
// import TodoList from "@/components/TodoList.vue";
import BaseIcon from "@/components/baseComponents/BaseIcon.vue";
import TodoListExample from "@/components/TodoListExample.vue";
import TodoCardItem from "@/types/TodoCardItem";

export default defineComponent({
    components: {
        // TodoList,
        BaseIcon,
        TodoListExample,
    },
    props: {
        item: {
            required: true,
            type: Object as PropType<TodoCardItem>,
        },
    },

    setup(props) {
        const todoTitle = computed(() => props.item.title);
        return { todoTitle };
    },
});
</script>

<style lang="scss" scoped>
.todo-card {
    &-container {
        padding: 16px;
        background: rgb(237, 243, 236);
        margin-bottom: 10px;
        min-width: 150px;
        flex: 0 0 calc(50% - 45px); /* каждый блок занимает 50% ширины за вычетом margin */
        margin: 5px;
    }

    &-title {
        display: flex;
        align-items: center;

        .todo-title {
            color: rgba(68, 131, 97, 1);
        }
    }
}
</style>

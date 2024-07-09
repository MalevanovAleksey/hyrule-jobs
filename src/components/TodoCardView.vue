<template>
    <div class="todo-card-container">
        <div class="todo-card-title">
            <BaseIcon iconName="calendar" :size="30" />
            <label class="todo-title"> {{ todoTitle }} </label>
            <BaseIcon class="todo-card-icon_plus" iconName="plus" @click="openModal" />
        </div>
        <TodoListExample :items="todoItems" :dayType="todoTitle" />
        <BaseModal ref="modal" :dayType="todoTitle" />
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
// import TodoList from "@/components/TodoList.vue";
import BaseIcon from "@/components/baseComponents/BaseIcon.vue";
import TodoListExample from "@/components/TodoListExample.vue";
import TodoCardItem from "@/types/TodoCardItem";
import BaseModal from "@/components/baseComponents/BaseModal.vue";

export default defineComponent({
    components: {
        // TodoList,
        BaseIcon,
        TodoListExample,
        BaseModal,
    },
    props: {
        item: {
            required: true,
            type: Object as PropType<TodoCardItem>,
        },
    },

    setup(props) {
        const todoTitle = computed(() => props.item.title);
        const todoItems = computed(() => props.item.todoItems);

        return { todoTitle, todoItems };
    },

    methods: {
        openModal() {
            console.log(this.$refs);
            (this.$refs.modal as any).openModal();
        },
    },
});
</script>

<style lang="scss" scoped>
.todo-card {
    &-container {
        position: relative;
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

    &-icon_plus {
        cursor: pointer;
        position: absolute;
        right: 0;
    }
}
</style>

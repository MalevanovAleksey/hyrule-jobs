<template>
    <div>
        <ul>
            <div
                class="todo-list-item"
                v-for="(todo, index) in todoItems"
                :key="todo.id"
                @mouseenter="showIcon(index)"
                @mouseleave="hideIcon()"
            >
                <BaseCheckbox :value="todo.complited" />
                <li class="todo-list-label">{{ todo.title }}</li>
                <div class="actions" v-if="index === showedIndex">
                    <BaseIcon class="action_icon" iconName="pencil" @click="change(todo)" />
                    <BaseIcon class="action_icon" iconName="trash" @click="remove(todo)" />
                </div>
            </div>
            <BaseModal ref="modalComponent" :item="activeTodo" :dayType="itemDayType" />
        </ul>
    </div>
</template>
<script lang="ts">
import BaseIcon from "@/components/baseComponents/BaseIcon.vue";

import BaseCheckbox from "@/components/baseComponents/BaseCheckbox.vue";
import BaseModal from "@/components/baseComponents/BaseModal.vue";

import TodoItem from "@/types/TodoItem";
import { computed, defineComponent, PropType, ref } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
    name: "TodoList",
    components: {
        BaseCheckbox,
        BaseIcon,
        BaseModal,
    },
    props: {
        items: {
            required: true,
            type: Array as PropType<TodoItem[]>,
        },
        dayType: {
            required: true,
            type: String,
        },
    },
    setup(props) {
        const todoItems = computed(() => props.items);
        const itemDayType = computed(() => props.dayType);

        const activeTodo = ref<TodoItem>();
        const showedIndex = ref<number | null>(null);

        const showIcon = (index: number) => {
            showedIndex.value = index;
        };

        const hideIcon = () => {
            showedIndex.value = null;
        };

        return { todoItems, showIcon, hideIcon, showedIndex, activeTodo, itemDayType };
    },

    methods: {
        ...mapActions(["removeTodoItem"]),

        remove(todo: TodoItem) {
            this.removeTodoItem(todo);
        },
        change(todo: TodoItem) {
            this.openModal(todo);
        },

        openModal(todo?: TodoItem) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.activeTodo = todo;
            console.log(this.$refs);
            (this.$refs.modalComponent as any).openModal();
        },
    },
});
</script>

<style scoped lang="scss">
.todo-list-item {
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px 0;
}

.todo-list-label {
    margin-left: 10px;
}

ul {
    list-style-type: none;
    color: rgb(55, 53, 47);
}
.actions {
    display: flex;
    position: absolute;
    right: 0;
    .action_icon {
        cursor: pointer;
    }
}
</style>

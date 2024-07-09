<template>
    <div>
        <ul>
            <div class="todo-list-item">
                <BaseCheckbox />
                <li class="todo-list-label">To - do</li>
            </div>

            <div class="todo-list-item">
                <BaseCheckbox />
                <li class="todo-list-label">To - do</li>
            </div>
            <div class="todo-list-item">
                <BaseCheckbox />
                <li class="todo-list-label">To - do</li>
            </div>
            <div class="todo-list-item">
                <BaseCheckbox />
                <li class="todo-list-label">To - do</li>
            </div>
        </ul>
    </div>
</template>
<script lang="ts">
import BaseCheckbox from "@/components/baseComponents/BaseCheckbox.vue";
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
    name: "TodoList",
    components: {
        BaseCheckbox,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped lang="scss">
.todo-list-item {
    display: flex;
    align-items: center;
}

.todo-list-label {
    margin-left: 10px;
}

ul {
    list-style-type: none;
    color: rgb(55, 53, 47);
}
</style>

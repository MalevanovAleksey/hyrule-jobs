<template>
    <div v-if="showModal" class="modal">
        <div class="modal-content">
            <span class="close-button" @click="closeModal">&times;</span>
            <h2>Введите новое значение:</h2>
            <input v-model="inputValue" type="text" />
            <div class="button-container">
                <button @click="saveValue">Сохранить</button>
                <button @click="closeModal">Отмена</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, PropType } from "vue";
import TodoItem from "@/types/TodoItem";
import { useStore } from "vuex";

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<TodoItem>,
            required: false,
        },
        dayType: {
            type: String,
            required: false,
        },
    },
    setup(props) {
        const store = useStore();
        const showModal = ref(false);
        const inputValue = ref("");

        const openModal = () => {
            showModal.value = true;
        };

        const closeModal = () => {
            showModal.value = false;
            inputValue.value = "";
        };

        const saveValue = () => {
            console.log("Сохраненное значение:", inputValue.value);
            let newItem = {};
            if (props.item) {
                newItem = {
                    ...props.item,
                    title: inputValue.value,
                };
                store.dispatch("changeTodoItem", newItem);
            } else {
                newItem = {
                    id: generateRandomId(),
                    title: inputValue.value,
                    complited: false,
                    dayType: props.dayType,
                };
                store.dispatch("addTodoItem", newItem);
            }

            closeModal();
        };

        const generateRandomId = (length = 16) => {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";

            const timestamp = Date.now().toString(36);
            result += timestamp;

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                result += chars[randomIndex];
            }

            return result;
        };

        watch(
            () => props.item,
            (val) => {
                inputValue.value = val?.title;
            },
            { immediate: true }
        );

        return {
            showModal,
            inputValue,
            openModal,
            closeModal,
            saveValue,
            generateRandomId,
        };
    },
});
</script>

<style scoped>
.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
}

.close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close-button:hover,
.close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.button-container button {
    margin-left: 10px;
}
</style>

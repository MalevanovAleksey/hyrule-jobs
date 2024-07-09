import { createStore } from "vuex";
import TodoItem from "./types/TodoItem";

export const mutation = {
    ADD_TODO_ITEM: "ADD_TODO_ITEM",
    REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
    SET_TODO_ITEM: "SET_TODO_ITEM",
    CHANGE_TODO_ITEM: "CHANGE_TODO_ITEM",
};

export default createStore({
    state: {
        todoItems: [] as TodoItem[],
    },
    getters: {
        todoItems(state): TodoItem[] {
            return state.todoItems;
        },
    },

    mutations: {
        [mutation.ADD_TODO_ITEM]: (state, value: TodoItem) => {
            state.todoItems.push(value);
        },
        [mutation.REMOVE_TODO_ITEM]: (state, value: TodoItem) => {
            state.todoItems = state.todoItems.filter((todoItem) => todoItem.id !== value.id);
        },
        [mutation.SET_TODO_ITEM]: (state, value: TodoItem[]) => {
            state.todoItems = value;
        },
        [mutation.CHANGE_TODO_ITEM]: (state, value: TodoItem) => {
            const index = state.todoItems.findIndex((obj) => obj.id === value.id);
            if (index !== -1) {
                state.todoItems.splice(index, 1, value);
            }
        },
    },
    actions: {
        addTodoItem({ commit }, value: TodoItem) {
            commit("ADD_TODO_ITEM", value);
        },
        removeTodoItem({ commit }, value: TodoItem) {
            commit("REMOVE_TODO_ITEM", value);
        },
        setTodoItems({ commit }, value: TodoItem[]) {
            commit("SET_TODO_ITEM", value);
        },
        changeTodoItem({ commit }, value: TodoItem) {
            commit("CHANGE_TODO_ITEM", value);
        },
        async fetchTodoItems({ commit }) {
            try {
                fetch("https://api.todos")
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data.data);
                        commit("SET_TODO_ITEM", data.data);
                    });
                //   commit('setTodoItems', response.data);
            } catch (error) {
                console.error("Error fetching todo items:", error);
            }
        },
    },
});

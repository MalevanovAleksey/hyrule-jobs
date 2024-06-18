<template>
    <div>
      <h1>Todo List</h1>
      <input v-model="newTodoTitle" @keyup.enter="addTodo" placeholder="Add a new task" />
      <input type="date" v-model="newTodoDeadline" placeholder="Add a deadline" />
    <div> <span> newTodoDeadline </span> {{ newTodoDeadline }}</div>
      <ul>
        <li v-for="todo in todos" :key="todo.getId()">
          <input type="checkbox" v-model="todo.complited" />
          <div>
            {{ todo.getTitle() }}
          </div>
          <div>
            <span v-if="isDeadlineTodo(todo)"> - {{ todo.getDeadline() }}</span>
          </div>

          <button @click="removeTodo(todo.getId())">Remove</button>
        </li>
      </ul>
    </div>
  </template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import Todo from '@/types/Todo';
import DeadlineTodo from '@/types/DeadlineTodo';

export default defineComponent({
  name: 'TodoList',
  setup() {
    const todos = ref<Array<Todo | DeadlineTodo>>([]);
    const newTodoTitle = ref('');
    const newTodoDeadline = ref<string>();


    const addTodo = () => {
        if (newTodoDeadline.value) {
            const deadlineDate  = new Date(newTodoDeadline.value)
            const newTodo = new DeadlineTodo(
            todos.value.length ? todos.value[todos.value.length - 1].getId() + 1 : 1,
                newTodoTitle.value.trim(), deadlineDate
            );
            todos.value.push(newTodo);

        }
        else {
            const newTodo = new Todo(
             todos.value.length ? todos.value[todos.value.length - 1].getId() + 1 : 1,
            newTodoTitle.value.trim()
            );
            todos.value.push(newTodo);
        }
        newTodoTitle.value = '';
        newTodoDeadline.value = '';
    };

    const removeTodo = (id: number) => {
      todos.value = todos.value.filter(todo => todo.getId() !== id);
    };

    const isDeadlineTodo = (todo: Todo | DeadlineTodo): boolean => {
        return todo instanceof DeadlineTodo
    }

    return {
      todos,
      newTodoTitle,
      newTodoDeadline,
      addTodo,
      removeTodo,
      isDeadlineTodo
    };
  }
});
</script>

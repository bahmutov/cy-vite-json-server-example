<script>
// give each todo a unique id
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' },
      ],
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
    },
    removeTodo(todo) {
      console.log('removing todo', todo)
      this.todos = this.todos.filter((t) => t.id !== todo.id)
    },
  },
}
</script>

<template>
  <main>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" data-cy="add" />
      <button>Add Todo</button>
    </form>
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button data-cy="remove" @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </main>
</template>

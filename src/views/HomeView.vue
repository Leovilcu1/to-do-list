<template>
  <div class="container text-center">
    <div class="home">
    <TodoList msg="Welcome to Your Vue.js App"/>
  </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    TodoList
  }
}
</script>

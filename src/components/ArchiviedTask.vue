<template>
    <div class="container">
    <h2 class="text-center mt-5">Task Archiviati</h2>
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task,index) in archivedTasks" :key="index">
          <th scope="row">
            <span class="fatto">
              {{ task.name }}
            </span>
          </th>
          <td>
            <span class="pointer text-light p-2 rounded-3 bg-success">
              Fatto
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ArchivedTasks',
  props: {
    tasks: Array
  },
  computed: {
    archivedTasks() {
      return this.tasks.filter(task => task.archived);
    }
  }
}
</script>

<style scoped>
  .fatto{
    text-decoration: line-through;
  }
</style>





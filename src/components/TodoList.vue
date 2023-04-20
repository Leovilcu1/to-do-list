<template>
  <div>
    <h1>Task List</h1>
    <input v-model="newTask" placeholder="Add a new task...">
    <button @click="addTask">Add</button>

    <h2>Tasks</h2>
    <ul>
      <li class="py-2 d-flex justify-content-evenly" v-for="(task, index) in tasks" :key="index">
        <div :class="{ 'fatto': task.completed }">
          {{ task.name }}
        </div>
        <div >
          <button @click="archiveTask(index)">Archive</button>
          <button @click="cancelTask(index)">Cancel</button>
          <button @click="editTask(index)">Edit</button>
        </div>
      </li>
    </ul>

    <h2>Archived Tasks</h2>
    <ul>
      <li v-for="(task, index) in archivedTasks" :key="index">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newTask: '',
      }
    },
    computed: {
      tasks () {
        return this.$store.state.tasks
      },
      archivedTasks () {
        return this.$store.state.archivedTasks
      }
    },
    methods: {
      addTask () {
        if (this.newTask.trim()) {
          this.$store.commit('addTask', { name: this.newTask, completed: false })
          this.newTask = ''
        }
      },
      archiveTask (index) {
        this.$store.commit('archiveTask', index)
      },
      cancelTask (index) {
        this.$store.commit('cancelTask', index)
      },
      editTask (index) {
        const taskName = prompt('Enter the new task name', this.tasks[index].name)
        if (taskName !== null) {
          this.$store.commit('editTask', { index, name: taskName })
        }
      },
      changeStatus(index){
       let newIndex=this.availableStatuses.indexOf(this.tasks[index].status);
       if(++newIndex > 1) newIndex = 0;
       this.tasks[index].status=this.availableStatuses[newIndex];
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pointer{
    cursor: pointer;
  }
  .fatto{
    text-decoration: line-through;
  }
  ul>li{
    list-style:none;
  }
</style>

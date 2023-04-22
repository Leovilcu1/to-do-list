<template>
  <div>

    <h1>Task List - {{ this.$store.state.currentUser}}</h1>
    <input v-model="newTask" placeholder="Add a new task...">
    <button @click="addTask">Add</button>

    <h2>Tasks</h2>
    <ul>
      
      <li class="py-2 d-flex justify-content-evenly" v-for="(task, index) in tasks" :key="index">
        <div :class="{ 'fatto': task.completed,'fatto':task.status === 'fatto'}">
          {{ task.name }} 
        </div>
        <span class="btn btn-warning" v-if="task.status === 'fatto' && !task.archived" @click="archiveTask(index)">archivia</span>
        <div >
          <button @click="cancelTask(index)">Cancel</button>
          <button  @click="editTask(index)">Edit</button>
          <span @click="completedTask(index)" class="pointer text-light p-2 rounded-3" :class="{'bg-success': task.status === 'fatto','bg-danger': task.status === 'da fare'}">{{ task.status}}</span>
        </div>
      </li>
    </ul>

    <!-- <h2>Archived Tasks</h2>
    <ul>
      <li v-for="(task, index) in archivedTasks" :key="index">
        {{ task.name }}
      </li>
    </ul> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newTask: '',
        newUser:''
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
          this.$store.commit('addTask', { name: this.newTask, completed: false,status:'da fare', user:this.$store.state.currentUser})
          this.newTask = ''
          console.log(this.$store.state.tasks)
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
      completedTask(index){
        this.$store.commit('completedTask',index)
      }
      
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

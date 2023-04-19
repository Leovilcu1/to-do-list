<template>
  <div class="container">
    <h2 class="text-center mt-5">Lista Della Spesa</h2>
    <!-- Input -->
    <div class="d-flex">
      <input v-model="newTask" type="text" placeholder="Inserisci Spesa" class="form-control">
      <button @click="submitTask()" class="btn btn-warning rounded-0">Aggiungi</button>
    </div>
    <!-- Task table -->
    <table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task,index) in tasks" :key="index ">
      <th scope="row">
        <span :class="{'fatto': task.status ==='fatto'}">
          {{ task.name }}
        </span>
      </th>
      <td>
        <span @click="changeStatus(index)" class="pointer text-light p-2 rounded-3" :class="{'bg-success': task.status === 'fatto','bg-danger': task.status === 'da fare'}">
          {{ firstCharUpper(task.status)}}
        </span>
      </td>
      <td class="text-center">
        <div @click="editTask(index)">
          <span class="fa fa-pen mx-3 pointer"></span>
        </div>
        <div @click="deleteTask(index)">
          <span  class="fa fa-trash pointer"></span>
        </div>
        <div v-if="task.status === 'fatto' && !task.archived" @click="archiveTask(index)">
          <span  class="fa fa-archive pointer"></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    msg: String
  },
  data(){
    return{
      newTask: '',
      editedTask:null,
      availableStatuses:['da fare', 'fatto'],
      archivedTasks:[],
      tasks:[
        {
          name:'pane',
          status:'fatto',
          archive: false
        },
        {
          name:'pane',
          status:'da fare',
          archive: false
        },
      ]
    }
  },methods:{
    submitTask(){
      if(this.newTask.length === 0) return;
      if(this.editedTask === null){
        this.tasks.push({
        name: this.newTask,
        status:'da fare'
        });
      }else{
        this.tasks[this.editedTask].name=this.newTask;
        this.editedTask = null;
      }
      this.newTask= ''; 
      },
      deleteTask(index){
        this.tasks.splice(index,1);
      },
      editTask(index){
        this.newTask = this.tasks[index].name;
        this.editedTask = index;
      },
      changeStatus(index){
       let newIndex=this.availableStatuses.indexOf(this.tasks[index].status);
       if(++newIndex > 1) newIndex = 0;
       this.tasks[index].status=this.availableStatuses[newIndex];
      },
      firstCharUpper(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
      archiveTask(index) {
      let taskToArchive = this.tasks[index];
      if (!taskToArchive.archived) {
        taskToArchive.archived = true;
        this.archivedTasks.push(taskToArchive.name);
  }
  this.tasks.splice(index, 1);
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
</style>

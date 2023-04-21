import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { name: 'pane', completed: false, status:'da fare' },
      { name: 'latte', completed: false,status:'da fare' },
      { name: 'pasta', completed: false, status:'da fare' },
    ],
    archivedTasks: [],
    availableStatuses:['fatto','da fare'],

  },
  mutations: {
    addTask (state, task) {
      state.tasks.push(task)

    },
    archiveTask (state, index) {
        const task = state.tasks.splice(index, 1)[0]
        state.archivedTasks.push(task)

      
    },
     cancelTask (state, index) {
      state.tasks.splice(index, 1)
    },
    editTask (state, { index, name }) {
      state.tasks[index].name = name
    },
    completedTask(state,index){
       let newIndex=state.availableStatuses.indexOf(state.tasks[index].status);
       if(++newIndex > 1) newIndex = 0;
       state.tasks[index].status=state.availableStatuses[newIndex];
       console.log(state.tasks[index].status)
      },
    
  },
  getters: {
    taskCount: state => {
      return state.tasks.length
    },
    archivedTaskCount: state => {
      return state.archivedTasks.length
    }
  }
})

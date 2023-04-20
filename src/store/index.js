import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { name: 'pane', completed: false },
      { name: 'latte', completed: false },
      { name: 'pasta', completed: false },
    ],
    archivedTasks: [],
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
    }
    
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

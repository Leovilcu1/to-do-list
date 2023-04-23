<template>
  <div>
    <h2>Archived Tasks</h2>
    <div>
      <input type="text" v-model="search" placeholder="Search tasks...">
    </div>
    <ul>
      <li v-for="(task, index) in filteredArchivedTasks" :key="index">
        {{ task.name }} {{ task.user }}
      </li>
    </ul>
    <div>
      <select v-model="selected">
        <option disabled value="">Filter by user</option>
        <option value="all">All</option>
        <option v-for="(user, index) in uniqueUsers" :key="index" :value="user">
          {{ user }}
        </option>
      </select>
    </div>
    <p>Archived task count: {{ archivedTaskCount }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['archivedTasks']),
    archivedTaskCount() {
      return this.$store.getters.archivedTaskCount
    },
    uniqueUsers() {
      const users = this.archivedTasks.map((task) => task.user)
      return [...new Set(users)]
    },
    filteredArchivedTasks() {
      let filteredTasks = this.archivedTasks
      if (this.selected !== 'all') {
        filteredTasks = filteredTasks.filter((task) => task.user === this.selected)
      }
      if (this.search) {
        const searchTerm = this.search.trim().toLowerCase()
        filteredTasks = filteredTasks.filter(
          (task) =>
            task.name.toLowerCase().includes(searchTerm) ||
            task.user.toLowerCase().includes(searchTerm)
        )
      }
      return filteredTasks
    },
  },
  data() {
    return {
      selected: '',
      search: '',
    }
  },
}
</script>

<template>
  <div>
    <h2>Archived Tasks</h2>
    <ul>
      <li v-for="(task, index) in archivedTasks" :key="index">
        {{ task.name }}
      </li>
    </ul>
    <p>Archived task count: {{ archivedTaskCount }}</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['archivedTasks']),
      archivedTaskCount () {
        return this.$store.getters.archivedTaskCount
      }
    }
  }
</script>

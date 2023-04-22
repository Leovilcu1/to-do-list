<template>
    <div> 
      <h1>Inserisci il nome</h1>
      <input v-model="name" type="text" name=name placeholder="inserisci il tuo nome">
      <button @click="addNameLogin()">registrati</button>
      <router-link to="/home">Login</router-link>
      <p></p>
    </div>
  </template>
  
  <script>
    export default {
      name: 'LoginTask',
      data() {
        return {
          name: ''
        }
      },
        methods: {
            addNameLogin() {
                this.$store.commit('addNameLogin',this.name)
                this.$store.state.currentUser = this.$store.state.userTasks[this.$store.state.userTasks.length-1];
                // console.log(this.$store.state.userTasks[this.$store.state.currentUser])
                console.log(this.$store.state.currentUser)
            }
        }

    }
  </script>
   
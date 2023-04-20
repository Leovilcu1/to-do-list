<template>
  <div class="completati">
    <h1>Completati</h1>
  <ArchiviedTask/>

  </div>
</template>

<script>
import ArchiviedTask from '@/components/ArchiviedTask.vue'
  export default{
    name: 'completatiView',
    data(){
      return{

      };
    },
    components:{
      ArchiviedTask
    }
  };
</script>

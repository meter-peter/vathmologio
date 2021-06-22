<template>
<div>
    <select class="form-control" @change="createLessonTeaching($event)">
    <option value="" selected disabled>Choose the lesson you are teaching</option>
    <option v-for="lesson in lessons" :value="lesson._id" :key="lesson._id">{{ lesson.name }}</option>
  </select>

</div>

  
</template>

<script>
import {mapGetters,mapActions} from 'vuex'


export default {
    data(){
        return{
               selected:"",
               lesson:"",
               options:[],
}
     

    },
    computed : {...mapGetters(["lessons"])
    }
    ,beforeMount(){
        this.loadlessons();
    }
    ,methods: {...mapActions(["loadlessons"])



    }



}

</script>

<style>

</style>
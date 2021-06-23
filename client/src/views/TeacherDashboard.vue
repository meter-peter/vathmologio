<template>
<div>
    <select class="form-control" v-model="selected" @change="createLessonTeaching()">
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
    computed : {...mapGetters(["lessons","user"])
    }
    ,beforeMount(){
        this.loadlessons();
    }
    ,methods: {...mapActions(["loadlessons","assignLesson"]),

        createLessonTeaching(){
            console.log(this.user.teacher)
            console.log(this.selected)
            this.assignLesson(this.selected,this.user.teacher);
        },
         ...mapActions(["getProfile"])
  },
  created() {
    this.getProfile();



    }



}

</script>

<style>

</style>
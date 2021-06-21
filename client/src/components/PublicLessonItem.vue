<template>
<div>
<a href="#" class="list-group-item list-group-item-action align-items-start">
    <div class="d-flex w-100 justify-content-between">
<<<<<<< Updated upstream
        <h5 class="mb-1">{{lesson.title}}</h5>
        <small class="text-muted">{{lesson.year}}</small>
    
=======
        <h5 class="mb-1">{{lesson.name}}</h5>
        <small>{{lesson.sem}}</small>
>>>>>>> Stashed changes
    </div>
    <p class="mb-1">{{lesson.desc}}</p>
    <p>
       <router-link :to="{ name: 'lesson-details', params: {id: lesson._id } }">More...</router-link>
        </p>
</a>
</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters} from 'vuex'
import VModal from 'vue-js-modal'

Vue.use(VModal)

export default {
   props: ['lesson']

    ,
    data(){
        return{
            
        }
     
    },



    computed: {
        ...mapGetters(["user"]),

    },
    methods :{
        

      
      }
    
,
    
};
</script>

<style>
.list-group {
    min-width: 500px;
}
</style>

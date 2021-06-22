<template>
    <div class="well">
            <h2>{{currentlesson.name}}</h2><a>{{currentlesson.sem}}</a>
        
            <p>{{currentlesson.desc}}</p>


        </div>
      
 
</template>

<script>



import {
    mapActions,
    mapGetters
} from "vuex"


export default {
    
    computed:
        mapGetters(["currentlesson"])
        , 

    methods: {
        ...mapActions(["getLessonById"])

    },
   beforeMount() {
        this.getLessonById(this.$route.params.id);
   },

    data: function () {
        return {}
    }

}


</script>

<style scoped>
</style>

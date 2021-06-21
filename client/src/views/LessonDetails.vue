<template>
    <form>
        <div class="well">
            <h2>{{currentlesson.title}}</h2><a>{{currentlesson.sem}}</a>
            <h3 >{{currentlesson.teacher.name+" "+currentlesson.teacher.lastname}}</h3>
            <p>{{currentlesson.desc}}</p>


        </div>
      
    </form>


</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex"


export default {
    
    computed:{
        ...mapGetters(["currentlesson"])
        }, 

    methods: {
        ...mapActions(["getLessonById", "getLessonAuthors"])

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

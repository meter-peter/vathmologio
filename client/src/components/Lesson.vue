<template>
<div class="container">
    <h1 class="page-header">Edit currentlesson</h1>
    <form>
        <div class="well">
            <h2>{{currentlesson.title}}</h2><a>{{currentlesson.type}}</a>
            <h3 v-for=" author in currentlesson.authors" :key="author._id" :author="author">{{author.name+" "+author.lastname}}</h3>
            <p>{{currentlesson.desc}}</p>
            <a href="lesson.url">{{currentlesson.url}}</a>

        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex"
export default {
    computed: mapGetters("lessons", ["currentlesson"]),
    methods: {
        ...mapActions('lessons', ["getLessonById", "getLessonAuthors"])

    },
    beforeMount() {
        this.getLessonById(this.$route.params.id);

    },
    created() {

    },
    data: function () {
        return {}
    }

}
</script>

<style>

</style>

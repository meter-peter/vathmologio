<template>
<div class="d-flex" id="wrapper">
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Search Options</div>
        <div class="list-group list-group-flush">
            <label for="authorsearch">Search Lesson by Name</label>
            <input type="text" class="form-control" id="authorsearch" v-model="searchtitle">
            <label for="titlesearch">Search Lesson by keywords</label>
            <input type="text" class="form-control" id="titlesearch" v-model="searchkeywords">

        </div>
    </div>
    <div class="d-flex align-items-stretch flex-wrap">
        <ul>
        </ul>
        <PublicLessonItem v-for="lesson in filterlessons" :key="lesson.id" :lesson="lesson" @click="openLesson(lesson)" />
    </div>
   
</div>

</template>

<script>
import {

    mapActions,
    mapGetters,
} from "vuex";
import PublicLessonItem from '../components/PublicLessonItem'


export default {
    components: {
        PublicLessonItem
    },
    data() {
        return {
            searchtitle: "",
            searchkeywords: "",
            modalVisible: true,
            modalData: null

        }
    },
    computed: {
        ...mapGetters(["lessons"]),
        filterlessons: function () {
            let filtered = this.lessons;
            if (this.searchtitle) {
                filtered = this.lessons.filter(
                    m => m.title.toLowerCase().indexOf(this.searchtitle) > -1
                );
            }
            if (this.searchauth) {
                filtered = filtered.filter(
                    m => m.authors.toString().toLowerCase() === this.searchauth.toLowerCase()
                );
            }
            return filtered;
        }
    },
    mounted() {
        this.loadlessons();
    },
    methods: {
        ...mapActions(["loadlessons"]),

    },
    openPost(data) {
        this.$router.go({
            path: `/lesson/${data.id}`
        })

    },
};
</script>
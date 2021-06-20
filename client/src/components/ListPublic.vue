<template>
<div class="d-flex" id="wrapper">
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Search Options</div>
        <div class="list-group list-group-flush">
            <label for="authorsearch">Search Post by Author</label>
            <input type="text" class="form-control" id="authorsearch" v-model="searchauth">
            <label for="titlesearch">Search Post by title</label>
            <input type="text" class="form-control" id="titlesearch" v-model="searchtitle">

        </div>
    </div>
    <div class="d-flex align-items-stretch flex-wrap">
        <ul>
        </ul>
        <PublicPostItem v-for="post in filterposts" :key="post.id" :post="post" @click="openPost(post)" />
    </div>
    <Post v-if="modalVisible" @close="modalVisible = false" v-bind:post="modalData" />
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";
import PublicPostItem from "./PublicPostItem";
export default {
    components: {
        PublicPostItem
    },
    data() {
        return {
            searchtitle: "",
            searchauth: "",
            modalVisible: true,
            modalData: null

        }
    },
    computed: {
        ...mapState("posts", ["posts"]),
        filterposts: function () {
            let filtered = this.posts;
            if (this.searchtitle) {
                filtered = this.posts.filter(
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
        this.loadposts();
    },
    methods: {
        ...mapActions("posts", ["loadposts"]),

    },
    openPost(data) {
        this.$router.go({
            path: `/post/${data.id}`
        })

    },
};
</script>

<style>
#sidebar-wrapper {
    min-height: 100vh;
    margin-left: -15rem;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
    width: 15rem;
}

#page-content-wrapper {
    min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
    margin-left: 0;
}

@media (min-width: 768px) {
    #sidebar-wrapper {
        margin-left: 0;
    }

    #page-content-wrapper {
        min-width: 0;
        width: 100%;
    }

    #wrapper.toggled #sidebar-wrapper {
        margin-left: -15rem;
    }
}
</style>

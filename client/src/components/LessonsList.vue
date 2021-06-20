<template>
<div>
    <h1>posts</h1>
    <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay" :z-index="zIndex">
        <EditPost postid="post.__id"></EditPost>
        <v-btn color="primary" @click="overlay = false">
            Hide Overlay
        </v-btn>
    </v-overlay>
    <table id="posts" class="ui celled compact table">
        <thead>
            <tr>
                <th> <i class="calendar plus icon"></i>post</th>
                <th> <i class="info circle icon"></i>Detail</th>
                <th> <i class="lock open icon"></i></th>
                <th> <i class="edit icon"></i></th>
                <th> <i class="trash icon"></i></th>

                <th colspan="3"></th>
            </tr>
        </thead>
        <tr v-for="post in posts" :key="post.__id">
            <td>{{ post.title }}</td>
            <td>{{ post.authors[0] }}</td>
            <td width="75" class="center aligned">
            </td>
            <td width="75" class="center aligned">
                <v-btn color="green" @click="overlay = !overlay">
                    Edit
                </v-btn>

            </td>
            <td width="75" class="center aligned" @click.prevent="onDestroy(post._id)">
                <a :href="`/posts/${post._id}`">Delete</a>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
import EditPost from '../components/EditPost'
import {
    mapState
} from 'vuex'
export default {

    components: {
        EditPost
    },
    computed: {
        ...mapState('posts', ['posts'])
    },
    created() {
        this.$store.dispatch('posts/loadposts')
    },
    data: () => ({
        absolute: true,
        overlay: false,
        overlay2: false
    }),

}
</script>

<style>

</style>

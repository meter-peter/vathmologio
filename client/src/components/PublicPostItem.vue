<template>
<a href="#" class="list-group-item list-group-item-action align-items-start">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{post.title}}</h5>
        <small class="text-muted">{{post.year}}</small>
        <small>{{post.authors.name}}</small>
    </div>
    <p class="mb-1">{{post.desc}}</p>
    <small class="text-muted">{{post.desc}}</small>
    <p>
        <router-link :to="{ name: 'post-details', params: {id: post._id } }">More...</router-link>
        </p>
</a>
</template>

<script>
export default {
    props: ['post']
};
</script>

<style>
.list-group {
    min-width: 500px;
}
</style>

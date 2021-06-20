<template>
<a href="#" class="list-group-item list-group-item-action align-items-start">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{lesson.title}}</h5>
        <small class="text-muted">{{lesson.year}}</small>
        <small>{{lesson.authors.name}}</small>
    </div>
    <p class="mb-1">{{lesson.desc}}</p>
    <small class="text-muted">{{lesson.desc}}</small>
    <p>
        <router-link :to="{ name: 'lesson-details', params: {id: lesson._id } }">More...</router-link>
        </p>
</a>
</template>

<script>
export default {
    props: ['lesson']
};
</script>

<style>
.list-group {
    min-width: 500px;
}
</style>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">vathmologio+</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link to="/" class="nav-link">
                    Home
                    <span class="sr-only">(current)</span>
                </router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
                <div class="dropdown show">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add a citation
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Create a reference </a>
                        <a class="dropdown-item" href="#">Import from dblp</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/organizations" class="nav-link">Organizations</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/browse" class="nav-link">Browse</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
                <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
                <router-link to="/register" class="nav-link">Register</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <router-link to="/profile" class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <a to="/logout" class="nav-link" @click.prevent="logoutUser">Logout</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
export default {
    computed: {
        ...mapGetters(["isLoggedIn"])
    },
    methods: {
        ...mapActions(["logout"]),
        logoutUser() {
            this.logout();
        }
    }
};
</script>

<style>
</style>

<template>
<div>
  <b-navbar type="dark" variant="dark">
   
    <b-navbar-nav>
 <a class="navbar-brand" href="#">
    <img src="https://voxeurop.eu/wp-content/uploads/2020/04/mayk-wings.jpg" width="30" height="30" alt="">
  </a>
      
      <b-nav-item href="#">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
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

.img {
    object-fit:cover;
    height:100px ;
}

.navbar-brand {
  margin-left: 10px;
  object-fit:cover;
}
</style>

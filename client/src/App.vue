<template>
  <div id ="app">
    <Navbar></Navbar>
    <router-view></router-view>
    </div>
    
</template>

<script>
import Navbar from "./components/Navbar.vue"
export default {
  components : {
    Navbar

  }

}
</script>

<style>

</style>
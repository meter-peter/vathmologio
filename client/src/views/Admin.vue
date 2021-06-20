<template>
 <div class="card" v-if="user">
      <ul class="list-group">
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Username: {{ user.username }}</li>
        <li class="list-group-item">Name: {{ user.name }}</li>
        <li class="list-group-item">Role: {{user.type}}</li>
      </ul>
      <Users></Users>
    </div>



  
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import Users from '../components/Users'
export default {
    components:{
        Users
    }, computed: mapGetters(["user"])
, methods: {
    ...mapActions(["getProfile"])
  },
  created() {
    this.getProfile();
  }
}
</script>

<style>

</style>
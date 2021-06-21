<template>
 <div class="card" v-if="user">
      <ul class="list-group">
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Username: {{ user.username }}</li>
        <li class="list-group-item">Name: {{ user.firstname }}</li>
        <li class="list-group-item">Role: {{user.type}}</li>
      </ul>
        <b-nav tabs>
        <div>  

<div>
  <b-tabs content-class="mt-3">
    <b-tab title="Users" active><Users></Users></b-tab>
    <b-tab title="Second"><LessonInputForm></LessonInputForm></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>
</div>
        </b-nav>
    
      
    </div>



  
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import Users from '../components/Users.vue';

export default {
    components:{
        Users,
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
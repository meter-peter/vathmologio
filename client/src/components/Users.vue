<template>
<div>
    <tr v-for="user in users" :key="user.__id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
    
        <td width="75" class="center aligned" @click.prevent="onDestroy(user._id)">
          <a :href="`/users/${user._id}`">Delete</a>
        </td>
      </tr>
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
    components:{

  },
    computed: {
       ...mapState(['users'])
    },
 methods:{
     ...mapActions(["loadusers"])
 },
    created() {
        this.loadusers();

}}
</script>

<style>

</style>
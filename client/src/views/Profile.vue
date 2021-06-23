<template>
<div>
    <ul class="list-group">
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Username: {{ user.username }}</li>
        <li class="list-group-item">Name: {{ user.firstname }}</li>
        <li class="list-group-item">Role: {{user.type}}</li>
      </ul>
  
        <div class="field">
            <label class="label"> AM</label>
            <div class="control">
                <input class="input" v-model="am" type="text" placeholder="AM" required>
            </div>
        </div>
       
        <div class="field is-grouped" style="margin-top:20px">
            <div class="control">
                <button class="button is-link" @click="submit()">Be Student</button>
            </div>
        </div>


<vue-good-table
  :columns="columns"
  :rows="lessonsteaching"
  :select-options="{ enabled: true }"
  :search-options="{ enabled: true }">
</vue-good-table>



        </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'


export default {
    data(){
        
        return{
    
           am:null,
           columns: [
    {
      label: 'name',
      field: 'name',
      filterOptions: {
        enabled: true,
        customFilter: true,
        formatValue: this.formatFilterValue
      }
    }
  ]
           
        }

        
        
        },


    components:{
       
    }, 
  computed: mapGetters(["user","lessonsteaching"])
, methods: {
    ...mapActions(["getProfile","beStudent","loadlessonsteaching"]),
     submit(){
         const body ={am:this.am ,year_registered:2021, user:this.user._id}
         this.beStudent(body);
  },},
  created() {
    this.getProfile();
    this.loadlessonsteaching();

}
  }

  
  </script>
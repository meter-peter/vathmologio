<template>
 <div class="column is-three-fifths">
        <table v-if="data.length!=0" class="table">
            <thead>
                <tr>
                    <th v-for="(column,index) in columns" :key="index">{{column}}</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row,index_row) in users" :key="index_row" v-bind:class="{ editing: editId === row._id }" >
                    <td v-for="(column,index) in columns" :key="index"> {{row[column]}} </td>    
                    <td>
                        <p class="buttons">
                            <a class="button is-small is-primary" @click="makeT(row._id)">Teacher</a>
                      
                            <a class="button is-small is-danger" @click="deleteCustomer(row._id)">Delete</a>
                        </p>
                    </td>   
                </tr>
            </tbody>
        </table> 
        <div v-else class="notification is-danger">
           <strong> No Data to Show</strong>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    components:{

  },
    computed: {
       ...mapGetters(['users'])
,
            data(){
                return this.users
            },
            columns(){
                return this.users.length>0 ?
                       Object.keys(this.users[0]) : []
            }
        },

 methods:{
     ...mapActions(["loadusers","makeTeacher"])
     ,
     makeT(userid){
         console.log(userid)

         let data = {teacherRank :0, lessonsTeaching : [] ,user:userid};
        this.$store.dispatch('makeTeacher',data).then((res)=>{
                            if(res) {this.$swal(
                                    'He is a teacher now',
                                    'success'
                                    )
         }})
},},
    created() {
        this.loadusers();
      

}}

</script>

<style>

</style>
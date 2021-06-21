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
                <tr v-for="(row,index_row) in data" :key="index_row" v-bind:class="{ editing: editId === row.id }" >
                    <td v-for="(column,index) in columns" :key="index"> {{row[column]}} </td>    
                    <td>
                        <p class="buttons">
                            <a class="button is-small is-primary" @click="editCustomer(row)">Edit</a>
                            <a class="button is-small is-danger" @click="deleteCustomer(row.id)">Delete</a>
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
     ...mapActions(["loadusers"])

     
 },
    created() {
        this.loadusers();

}}
</script>

<style>

</style>